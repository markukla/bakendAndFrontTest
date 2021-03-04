import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {MaterialTableService} from '../../../materials/MaterialServices/material-table.service';
import {ValidateMaterialCodeUniqueService} from '../../../materials/MaterialServices/validate-material-code-unique.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationBackendService} from '../../AuthenticationServices/authentication.backend.service';
import {AuthenticationService} from '../../AuthenticationServices/authentication.service';
import {getBackendErrrorMesage} from '../../../helpers/errorHandlingFucntion/handleBackendError';
import {LanguageBackendService} from '../../../Languages/languageServices/language-backend.service';
import Language from '../../../Languages/LanguageTypesAndClasses/languageEntity';
import {VocabularyBackendServiceService} from '../../../Vocablulaty/VocabularyServices/vocabulary-backend-service.service';
import {Vocabulary} from '../../../Vocablulaty/VocabularyTypesAndClasses/VocabularyEntity';
import {API_URL} from '../../../Config/apiUrl';
import {setTabelColumnAndOtherNamesForSelectedLanguage} from "../../../helpers/otherGeneralUseFunction/getNameInGivenLanguage";
import {
  generalNamesInSelectedLanguage,
  generalUserNames
} from "../../../helpers/otherGeneralUseFunction/generalObjectWIthTableColumnDescription";
import LogInDto from "../../authenticationTypesAndClasses/login.dto";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterContentChecked {

  operationMessage: string;
  showoperationMessage: boolean;
  materialCreated: boolean;
  languages: Language [];
  activeLanguages: Language[];
  vocabularies: Vocabulary[];
  generalNamesInSelectedLanguage = generalNamesInSelectedLanguage;
  userNames = generalUserNames;
  puppeterUrl: string;
  productId:string;
  orderId:string;
  mode:string;
  puppeterEmail: string;
  puppeterPassword: string;
  puppeterLanguageCode: string;



  constructor(
    private loginBackendService: AuthenticationBackendService,
    public loginService: AuthenticationService,
    private vocabularyBackendService: VocabularyBackendServiceService,
    private languageBackendService: LanguageBackendService,
    public validateMaterialCodeUniqueService: ValidateMaterialCodeUniqueService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {

  }

  loginForm = new FormGroup({
    // tslint:disable-next-line:max-line-length
    email: new FormControl('', [Validators.nullValidator, Validators.required, /*Validators.minLength(6),*/   Validators.email]),
    password: new FormControl('', Validators.nullValidator && Validators.required),
  }, {updateOn: 'change'}); /*blur means if user clicks outside the control*/

  // tslint:disable-next-line:typedef
  get email() {
    return this.loginForm.get('email');
  }

  // tslint:disable-next-line:typedef
  get password() {
    return this.loginForm.get('password');
  }


  async onSubmit(): Promise<void> {
    console.log('on submit execution');
    this.showoperationMessage = true;
    this.loginBackendService.login(this.loginForm.value).subscribe((logedUser) => {
      this.loginService.setLogedUserUserAndToken(logedUser.body);
      this.router.navigateByUrl('/orders');
    }, error => {
      const backendErrorMessage = getBackendErrrorMesage(error);
      if (backendErrorMessage.includes('wrong email or password')) {
        this.operationMessage = this.generalNamesInSelectedLanguage.wrongEmailOrPassword;
      } else if (backendErrorMessage.includes('your account is inactive')) {
        this.operationMessage = this.generalNamesInSelectedLanguage.yourAccountIsInactive;
      } else {
        this.operationMessage = this.generalNamesInSelectedLanguage.loginFailerStatus;
      }
    });
  }

  closeAndGoBack(): void {
  }

  async ngOnInit(): Promise<void> {
    this.route.queryParamMap.subscribe(queryParams => {
      this.productId = queryParams.get('productId');
      this.orderId = queryParams.get('orderId')
      this.mode = queryParams.get('mode');
      this.puppeterEmail = queryParams.get('email');
      this.puppeterPassword = queryParams.get('password');
      this.puppeterLanguageCode = queryParams.get('languageCode');

      console.log(`this.productId = ${this.productId}`);
      console.log(`this.mode = ${this.mode}`);
      if(this.productId) {
        this.puppeterUrl = `/orders/drawing?productId=${this.productId}&mode=${this.mode}`;
      }
      else if (this.orderId) {
        this.puppeterUrl = `/orders/drawing?orderId=${this.orderId}&mode=${this.mode}`;
      }
      else {
        console.log('wrong path!!');
      }


    });
    this.loginService.vocabulariesInSelectedLanguage = [];

    const languages = await this.languageBackendService.getRecords().toPromise();
    const vocabularies = await this.vocabularyBackendService.getRecords().toPromise();
    this.languages = languages.body;
    this.activeLanguages = this.languages.filter(language =>
      language.active === true);
    this.loginService.languages = languages.body;
    this.vocabularies = vocabularies.body;
    console.log(`navigator.language = ${navigator.language}`);
    const languageOfBrowser = navigator.language.split('-')[0].toUpperCase();
    const avalaibeLanguageCodesInAplication: any[] = this.languages.map(language =>
       language.languageCode.toUpperCase()
    );
    if(avalaibeLanguageCodesInAplication.includes(languageOfBrowser)) {
      this.loginService.selectedLanguageCode = languageOfBrowser;
    }
    let logInDto: LogInDto;

    if(this.puppeterUrl) {
      logInDto ={
        email: this.puppeterEmail, password: this.puppeterPassword
      };
      this.loginBackendService.login(logInDto).subscribe((logedUser) => {
        this.loginService.setLogedUserUserAndToken(logedUser.body);
        if(this.puppeterLanguageCode) {
          this.loginService.selectedLanguageCode = this.puppeterLanguageCode;
        }

        this.loginService.vocabulariesInSelectedLanguage = [];
        // tslint:disable-next-line:max-line-length
        this.vocabularies.forEach((vocabulary) => {this.loginService.vocabulariesInSelectedLanguage.push(this.vocabularyBackendService.createVocabularryForTableCellFromVocabulary(vocabulary));
        });
        this.initColumnNamesInSelectedLanguage();
        this.loginService.generalUserNames = this.generalNamesInSelectedLanguage;
        this.router.navigateByUrl(this.puppeterUrl);
      });
    }

     else {
      logInDto ={
        email: 'jacek.luczak@outlook.com', password: 'Nicram12'
      };
      this.loginBackendService.login(logInDto).subscribe((logedUser) => {
        this.loginService.setLogedUserUserAndToken(logedUser.body);

        this.loginService.selectedLanguageCode = 'PL';
        this.loginService.vocabulariesInSelectedLanguage = [];
        // tslint:disable-next-line:max-line-length
        this.vocabularies.forEach((vocabulary) => {this.loginService.vocabulariesInSelectedLanguage.push(this.vocabularyBackendService.createVocabularryForTableCellFromVocabulary(vocabulary));
        });
        this.initColumnNamesInSelectedLanguage();
        this.loginService.generalUserNames = this.generalNamesInSelectedLanguage;
        this.router.navigateByUrl('/orders');
      });
    }

  }
  initColumnNamesInSelectedLanguage(): void {
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:max-line-length
    setTabelColumnAndOtherNamesForSelectedLanguage(this.generalNamesInSelectedLanguage, this.loginService.vocabulariesInSelectedLanguage);
    setTabelColumnAndOtherNamesForSelectedLanguage(this.userNames, this.loginService.vocabulariesInSelectedLanguage);
  }

  ngAfterContentChecked(): void {
  }

  setSelectedLanguageCode(languageCode: string): void {
    this.loginService.selectedLanguageCode = languageCode;
    this.loginService.vocabulariesInSelectedLanguage.length = 0;
    // tslint:disable-next-line:max-line-length
    this.vocabularies.forEach((vocabulary) => {this.loginService.vocabulariesInSelectedLanguage.push(this.vocabularyBackendService.createVocabularryForTableCellFromVocabulary(vocabulary));
    });
    this.initColumnNamesInSelectedLanguage();
  }
  getFlagUrl(language: Language): string {
    const flagUlr = API_URL + language.flagUrl;
    return flagUlr;

  }

  navigateToPrintToPdf() {
    this.router.navigateByUrl(this.puppeterUrl);
  }
}
