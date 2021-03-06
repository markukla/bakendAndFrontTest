import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgModel, Validators} from '@angular/forms';
import {MaterialBackendService} from '../MaterialServices/material-backend.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ValidateMaterialCodeUniqueService} from '../MaterialServices/validate-material-code-unique.service';
import {AuthenticationService} from '../../LoginandLogOut/AuthenticationServices/authentication.service';
import {
  generalNamesInSelectedLanguage,
  materialNamesInSelectedLanguage
} from "../../helpers/otherGeneralUseFunction/generalObjectWIthTableColumnDescription";
import {BackendMessageService} from "../../helpers/ErrorHandling/backend-message.service";
import {navigateToUrlAfterTimout} from "../../helpers/otherGeneralUseFunction/navigateToUrlAfterTimeOut";
import LocalizedName from "../../DimensionCodes/DimensionCodesTypesAnClasses/localizedName";
import {LanguageFormService} from "../../LanguageForm/language-form.service";
import {MaterialDto} from "../MaterialsMainComponent/materialDto";

@Component({
  selector: 'app-create-new-material',
  templateUrl: './create-new-material.component.html',
  styleUrls: ['./create-new-material.component.css']
})
export class CreateNewMaterialComponent implements OnInit{
  operationMessage: string;
  showoperationStatusMessage: string;
  materialNamesInSelectedLanguage = materialNamesInSelectedLanguage
  generalNamesInSelectedLanguage = generalNamesInSelectedLanguage;

  constructor(private authenticationService: AuthenticationService,
              private materialbackendService: MaterialBackendService,
              private backendMessageService: BackendMessageService,
              public validateMaterialCodeUniqueService: ValidateMaterialCodeUniqueService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private languageFormService: LanguageFormService) {

  }
  materialForm = new FormGroup({
    // tslint:disable-next-line:max-line-length
    materialCode: new FormControl('', [Validators.nullValidator, Validators.required, Validators.minLength(6),   Validators.maxLength(6)], [this.validateMaterialCodeUniqueService.materialCodeValidator()]),
    // tslint:disable-next-line:max-line-length
    materialName: new FormControl('', [Validators.nullValidator && Validators.required], [this.validateMaterialCodeUniqueService.materialNameValidator()]),
  }, {updateOn: 'change'});
// tslint:disable-next-line:typedef
  get materialCode() {
    return this.materialForm.get('materialCode');
  }

  // tslint:disable-next-line:typedef
  get materialName() {
    return this.materialForm.get('materialName');
  }
  onSubmit(): void {
    const localizedNames: LocalizedName[] = [];
    this.languageFormService.languageNames.forEach((languageInput) => {
      const localizedDimensionName: LocalizedName = {
        language: {id: languageInput.nativeElement.id},
        nameInThisLanguage: languageInput.nativeElement.value
      };
      localizedNames.push(localizedDimensionName);
    });
    const material: MaterialDto = {
      localizedNames,
      materialCode: this.materialCode.value,
      materialName: this.materialName.value

    };
    this.materialbackendService.addRecords(material).subscribe((material) => {
      this.showoperationStatusMessage = this.backendMessageService.returnSuccessMessageToUserForSuccessBackendResponseForCreateNew();
      navigateToUrlAfterTimout(this.authenticationService._previousUrl, this.router);
    }, error => {
      this.showoperationStatusMessage = this.backendMessageService.returnErrorToUserBasingOnBackendErrorStringForCreateNew(error);
    });
 }
  closeAndGoBack(): void {
    console.log('close button clicked');
    this.router.navigateByUrl(this.authenticationService._previousUrl);
  }

  ngOnInit(): void {
    this.languageFormService.languages = this.authenticationService.languages;
    this.initColumnNamesInSelectedLanguage();
  }

  initColumnNamesInSelectedLanguage(): void {
    // tslint:disable-next-line:max-line-length
    this.generalNamesInSelectedLanguage = this.authenticationService.generalNamesInSelectedLanguage;
    this.materialNamesInSelectedLanguage = this.authenticationService.materialNamesInSelectedLanguage;
  }
  cleanOperationMessage(): void {
    setTimeout(() => {
      this.showoperationStatusMessage = null;
    }, 2000);
  }

}
