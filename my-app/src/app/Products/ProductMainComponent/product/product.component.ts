import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductBackendService} from './ProductServices/product-backend.service';
import OrderOperationMode from '../../../Orders/OrdersTypesAndClasses/orderOperationMode';
import ProductModeEnum from '../../ProductTypesAndClasses/productMode';
import {GeneralTableService} from '../../../util/GeneralTableService/general-table.service';
import {SearchService} from '../../../helpers/directive/SearchDirective/search.service';
import {ProductForTableCell} from '../../ProductTypesAndClasses/productForTableCell';
import {OperationStatusServiceService} from '../../../OperationStatusComponent/operation-status/operation-status-service.service';
import {
  generalNamesInSelectedLanguage,
  orderNames
} from "../../../helpers/otherGeneralUseFunction/generalObjectWIthTableColumnDescription";
import {AuthenticationService} from "../../../LoginandLogOut/AuthenticationServices/authentication.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterContentChecked {

  @Input()
  records: ProductForTableCell[];
  createNewMaterialDescription = 'Dodaj Nowy';
  // tslint:disable-next-line:ban-types
  deleTedMaterialMessage: any;
  operationStatusMessage: string;
  showUpdateForm = false;
  materialId: number;
  recordNumbers: number;
  showConfirmDeleteWindow: boolean;
  operationFailerStatusMessage: string;
  operationSuccessStatusMessage: string;
  orderNamesInSelectedLanguage = orderNames;
  generalNamesInSelectedLanguage = generalNamesInSelectedLanguage;

  constructor(public tableService: GeneralTableService,
              public backendService: ProductBackendService,
              private router: Router,
              private activedIdParam: ActivatedRoute,
              private searChService: SearchService,
              private authenticationService: AuthenticationService,
              public statusService: OperationStatusServiceService) {
  }
  ngOnInit(): void {
    this.initColumnNamesInSelectedLanguage();
    this.getRecords();
    this.materialId = this.tableService.selectedId;
  }
  initColumnNamesInSelectedLanguage(): void {
    this.passOperationStatusMessageFromOrderDrawingComponent();
    // tslint:disable-next-line:max-line-length
    this.generalNamesInSelectedLanguage = this.authenticationService.generalNamesInSelectedLanguage;
    this.orderNamesInSelectedLanguage = this.authenticationService.orderNamesInSelectedLanguage;
  }
  passOperationStatusMessageFromOrderDrawingComponent(): void {
    if(this.statusService.operationFailerStatusMessage) {
      this.operationFailerStatusMessage = this.statusService.operationFailerStatusMessage;
      console.log(`this.operationFailerStatusMessage= ${this.operationFailerStatusMessage}`);
      this.statusService.makeOperationStatusVisable();
    }
    else if(this.statusService.operationSuccessStatusMessage) {
      this.operationSuccessStatusMessage= this.statusService.operationSuccessStatusMessage;
      this.statusService.makeOperationStatusVisable();

    }
    this.statusService.resetOperationStatusAfterTimeout([this.operationFailerStatusMessage, this.operationSuccessStatusMessage]);
    this.statusService.resetServiceProperties();
  }
  ngAfterContentChecked(): void {
    if (this.records) {
      this.recordNumbers = this.records.length;
    }
  }
  getRecords(): void {
    this.backendService.getRecords().subscribe((records) => {
      this.tableService.records.length = 0;
      this.tableService.records = [];
      records.body.forEach((record) => {
        const recorForTableCell = this.backendService.createProductForTableCellFromProductTop(record);
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
        this.operationSuccessStatusMessage = this.generalNamesInSelectedLanguage.operationDeleteSuccessStatusMessage;
        this.tableService.selectedId = null;
        this.showConfirmDeleteWindow = false;
        this.statusService.makeOperationStatusVisable();
        this.statusService.resetOperationStatusAfterTimeout([this.operationFailerStatusMessage, this.operationSuccessStatusMessage]);
      }, error => {
        this.operationFailerStatusMessage = this.generalNamesInSelectedLanguage.operationDeleteFailerStatusMessage;
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

  updateSelectedRecord(productToUpdateId: number): void {
    this.tableService.selectedId = productToUpdateId;
    this.router.navigateByUrl(`products/add?mode=${ProductModeEnum.UPDATE}&productId=${productToUpdateId}`);
  }
  createNewProduct(): void {
    this.router.navigateByUrl(`products/add?mode=${ProductModeEnum.CREATENEW}`);
  }


  showDrawing(id: number): void {
      this.router.navigateByUrl(`orders/drawing?productId=${id}&mode=${OrderOperationMode.SHOWPRODUCT}`);
  }
}
