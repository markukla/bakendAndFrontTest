import { Component, OnInit } from '@angular/core';
import {UserBackendService} from '../../../../Users/UserServices/user-backend.service';
import {UsersTableService} from '../../../../Users/UserServices/users-table.service';
import {UserValidatorService} from '../../../../Users/UserServices/user-validator.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import CHangePasswordByAdminDto from '../../../../Users/users/userTypes/changePasswordDto';
import {UserHasAdminRole} from '../../../../helpers/otherGeneralUseFunction/checkUserRolesFunction';
import {BusinesPartnerBackendService} from '../../BusinessPartnerServices/busines-partner-backend.service';
import {BusinessPartnerTableService} from '../../BusinessPartnerServices/business-partner-table.service';
import {BusinessPartnerValidatorService} from '../../BusinessPartnerServices/business-partner-validator.service';
import {AuthenticationService} from '../../../../LoginandLogOut/AuthenticationServices/authentication.service';
import {setTabelColumnAndOtherNamesForSelectedLanguage} from '../../../../helpers/otherGeneralUseFunction/getNameInGivenLanguage';
import {
  generalNamesInSelectedLanguage,
  generalUserNames, orderNames
} from '../../../../helpers/otherGeneralUseFunction/generalObjectWIthTableColumnDescription';
import {GeneratePassordAlgoritm} from "../../../../helpers/directive/GeneratePasswordDirective/generatePassordAlgoritm";
import {GeneralTableService} from "../../../../util/GeneralTableService/general-table.service";
import {navigateToUrlAfterTimout} from "../../../../helpers/otherGeneralUseFunction/navigateToUrlAfterTimeOut";

@Component({
  selector: 'app-business-partner-change-password',
  templateUrl: './business-partner-change-password.component.html',
  styleUrls: ['./business-partner-change-password.component.css']
})
export class BusinessPartnerChangePasswordComponent implements OnInit {

  operationStatusMessage: string;
  selectedId: string;
  userNamesInSelectedLanguage = generalUserNames;
  generalNamesInSelectedLanguage = generalNamesInSelectedLanguage;
  orderNames = orderNames;
  userForm: FormGroup;

  constructor(
    private backendService: BusinesPartnerBackendService,
    private authenticationService: AuthenticationService,
    private tableService: GeneralTableService,
    public validatorService: BusinessPartnerValidatorService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {


  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queryParams) => {

      this.selectedId = queryParams.get('parnterId');

    });
    this.userForm = new FormGroup({
      // tslint:disable-next-line:max-line-length
      password: new FormControl('', [Validators.nullValidator, Validators.required, Validators.minLength(8),  this.validatorService.patternValidator(/(?=(.*\d){2})/, { hasNumber: true }), this.validatorService.patternValidator(/[A-Z]/, { hasCapitalCase: true }), this.validatorService.patternValidator(/[a-z]/, { hasSmallCase: true })]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, {updateOn: 'change', validators: [this.validatorService.passwordMatchValidator({NoPassswordMatch: true})]});

    this.getSelectedUserData();
  }

  // @ts-ignore


  // tslint:disable-next-line:typedef
  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }
  // tslint:disable-next-line:typedef
  userFulname: string;
  userEmail: string;
  userCompanyName: string;
  userPartnerCode: string;
  // tslint:disable-next-line:typedef
  get password() {
    return this.userForm.get('password');
  }
  onSubmit(): void {
    const changePasswordData: CHangePasswordByAdminDto = {newPassword: this.password.value};
    this.backendService.changeUserPasswordById(this.selectedId, changePasswordData).subscribe((user) => {
      this.operationStatusMessage = this.userNamesInSelectedLanguage.passwordChangeSuccessStatus;
      navigateToUrlAfterTimout(this.authenticationService._previousUrl, this.router);
    }, error => {
      this.operationStatusMessage = this.userNamesInSelectedLanguage.passwordChangeFailerStatus;
    });
  }
  closeAndGoBack(): void {
    /*this.router.navigateByUrl('businessPartners/1');*/
    this.router.navigateByUrl('businessPartners');
  }


  initColumnNamesInSelectedLanguage(): void {
    this.userNamesInSelectedLanguage = this.authenticationService.generalUserNames;
    this.generalNamesInSelectedLanguage = this.authenticationService.generalNamesInSelectedLanguage;
    this.orderNames = this.authenticationService.orderNamesInSelectedLanguage;
  }
  cleanOperationMessage(): void {
    setTimeout(() => {
      this.operationStatusMessage = null;
    }, 2000);
  }
  getSelectedUserData(): void {
    this.backendService.findRecordById(this.selectedId).subscribe((user) => {
      if (user.body) {
        this.userFulname = user.body.fulName;
        this.userEmail = user.body.email;
        this.userCompanyName = user.body.businesPartnerCompanyName;
        this.userPartnerCode = user.body.code;
      }
    });
  }

  generatePassword() {
    const passordGenerator = new GeneratePassordAlgoritm();
    const generetedPassword= passordGenerator.generatePassword(10)
    this.password.setValue(generetedPassword)
    this.confirmPassword.setValue(generetedPassword);
  }


}
