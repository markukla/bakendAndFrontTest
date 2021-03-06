import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DimensionCodeBackendService} from '../DimensionCodeServices/dimension-code-backend.service';
import LocalizedName from '../DimensionCodesTypesAnClasses/localizedName';
import {LanguageBackendService} from '../../Languages/languageServices/language-backend.service';
import Language from '../../Languages/LanguageTypesAndClasses/languageEntity';
import OperationModeEnum from '../../util/OperationModeEnum';
import {SearchService} from '../../helpers/directive/SearchDirective/search.service';
import {GeneralTableService} from '../../util/GeneralTableService/general-table.service';
import {OperationStatusServiceService} from '../../OperationStatusComponent/operation-status/operation-status-service.service';
import {DimensionCodeForTableCell} from "../DimensionCodesTypesAnClasses/dimensionCodeForTableCell";
import {
  dimensionNames,
  generalNamesInSelectedLanguage
} from "../../helpers/otherGeneralUseFunction/generalObjectWIthTableColumnDescription";
import {AuthenticationService} from "../../LoginandLogOut/AuthenticationServices/authentication.service";

@Component({
  selector: 'app-dimension-codes-main',
  templateUrl: './dimension-codes-main.component.html',
  styleUrls: ['./dimension-codes-main.component.css']
})
export class DimensionCodesMainComponent implements OnInit, AfterContentChecked {
  @Input()
  records: DimensionCodeForTableCell[];
  createNewMaterialDescription = 'Dodaj Nowy';
  // tslint:disable-next-line:ban-types
  deleTedRecordMessage: any;
  operationStatusMessage: string;
  deleteButtonInfo: string;
  showUpdateForm = false;
  updateButtonInfo;
  materialId: number;
  selectedLanguageLang: string;
  recordNumbers: number;
  languages: Language[]; // it will be obtained from database
  showConfirmDeleteWindow: boolean;
  operationFailerStatusMessage: string;
  operationSuccessStatusMessage: string;
  dimensionNames = dimensionNames;
  generalNamesInSelectedLanguage = generalNamesInSelectedLanguage;


  constructor(public tableService: GeneralTableService,
              public backendService: DimensionCodeBackendService,
              private router: Router,
              private languageBackendService: LanguageBackendService,
              public statusService: OperationStatusServiceService,
              private activedIdParam: ActivatedRoute,
              private searChService: SearchService,
              private authenticationService: AuthenticationService) {
  }
 async ngOnInit(): Promise <void> {
    this.initColumnNamesInSelectedLanguage();
    this.selectedLanguageLang = 'PL';
    await this.getLanguagesFromDatabase();
    this.getRecords();
    this.materialId = this.tableService.selectedId;
    this.deleteButtonInfo = this.generalNamesInSelectedLanguage.deleteButtonInfo;
    this.updateButtonInfo = this.generalNamesInSelectedLanguage.updateButtonInfo;
  }

  initColumnNamesInSelectedLanguage(): void {
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:max-line-length
    this.generalNamesInSelectedLanguage = this.authenticationService.generalNamesInSelectedLanguage;
    this.dimensionNames = this.authenticationService.dimensionNamesInSelectedLanguage;
  }
  ngAfterContentChecked(): void {
    if (this.records) {
      this.recordNumbers = this.records.length;
    }
  }
  async getLanguagesFromDatabase(): Promise <void> {
    const languages = await this.languageBackendService.getRecords().toPromise();
    this.languages = languages.body;
  }
  getRecords(): void {
    this.backendService.getRecords().subscribe((records) => {
      this.tableService.records.length = 0;
      records.body.filter(r=>r.softDeleteDate ===null).forEach((record) => {
        const recorForTableCell = this.backendService.createProductTypeForTableCellFromProductTop(record);
        this.tableService.records.push(recorForTableCell);
      });
      this.records = this.tableService.getRecords();
      this.searChService.orginalArrayCopy = [...this.tableService.getRecords()];
    });

  }

  selectRecordtoDeleteAndShowConfirmDeleteWindow(materialId: number): void {
    this.statusService.resetOperationStatus([this.operationFailerStatusMessage, this.operationSuccessStatusMessage]);
    this.showConfirmDeleteWindow = true;
    this.tableService.selectedId = materialId;
  }
  deleteSelectedRecordFromDatabase(recordId: number, deleteConfirmed: boolean): void {
    if (deleteConfirmed === true) {
      this.backendService.deleteRecordById(String(recordId)).subscribe((response) => {
        this.operationSuccessStatusMessage = generalNamesInSelectedLanguage.operationDeleteSuccessStatusMessage;
        this.tableService.selectedId = null;
        this.showConfirmDeleteWindow = false;
        this.statusService.makeOperationStatusVisable();
        this.statusService.resetOperationStatusAfterTimeout([this.operationFailerStatusMessage, this.operationSuccessStatusMessage]);
      }, error => {
        this.operationFailerStatusMessage = generalNamesInSelectedLanguage.operationDeleteFailerStatusMessage;
        this.tableService.selectedId = null;
        this.showConfirmDeleteWindow = false;
        this.statusService.makeOperationStatusVisable();
        this.statusService.resetOperationStatusAfterTimeout([this.operationFailerStatusMessage, this.operationSuccessStatusMessage]);
      });
    }
    else {
      this.showConfirmDeleteWindow = false;
    }
  }

  updateSelectedRecord(recordId: number): void {
    this.tableService.selectedId = recordId;
    this.router.navigateByUrl(`/dimensionCodes/add?mode=${OperationModeEnum.UPDATE}&recordId=${recordId}`);
  }

getSelectedLanguageFromNamesInAllLanguages(localizedNames: LocalizedName[], selectedLanguageLang: string): string {

    const localizedNameInGivenLanguage: LocalizedName[] = [];
    let name = '';
    if (localizedNames && localizedNames.length > 0) {
      localizedNames.forEach((localizedName) => {
        if (localizedName.language === selectedLanguageLang) {
          localizedNameInGivenLanguage.push(localizedName);
        }
      });
      name = localizedNameInGivenLanguage[0].nameInThisLanguage;
    }

    return name;
}

  createNewRecord(): void {
    this.router.navigateByUrl(`/dimensionCodes/add?mode=${OperationModeEnum.CREATENEW}`);
  }
}
