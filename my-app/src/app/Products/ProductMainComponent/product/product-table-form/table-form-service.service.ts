import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CreateOrderDto} from '../../../../Orders/OrdersTypesAndClasses/orderDto';
import WorkingSideEnum from '../../../../Orders/OrdersTypesAndClasses/workingSideEnum';
import OrderOperationMode from '../../../../Orders/OrdersTypesAndClasses/orderOperationMode';
import CreateProductDto from '../../../ProductTypesAndClasses/product.dto';
import {AuthenticationService} from '../../../../LoginandLogOut/AuthenticationServices/authentication.service';
import {getSelectedLanguageFromNamesInAllLanguages} from '../../../../helpers/otherGeneralUseFunction/getNameInGivenLanguage';
import LocalizedDimensionCode from "../../../../DimensionCodes/DimensionCodesTypesAnClasses/localizedDimensionCode";
import {DimensionCodeBackendService} from "../../../../DimensionCodes/DimensionCodeServices/dimension-code-backend.service";
import DimensionCode from "../../../../DimensionCodes/DimensionCodesTypesAnClasses/diemensionCode.entity";

@Injectable({
  providedIn: 'root'
})
export class TableFormServiceService {
  tableForm: FormGroup;
  orderTotalNumber: string;
  index: string;
  orderCreator: string;
  orderName: string;
  date: Date;
  materialName: string;
  materialCode: string;
  materialDescriptionInSelectedLanguage: string;
  materialNameCodeAndOptionalDescription: string;
  Lvalue: string;  // value for second indexDimension
  Dvalue: string; // value for first index dimension
  productTypeName: string;
  productTypeCode: string;
  productTopCode: string;
  productBottomCode: string;
  materialPartialCodeForIndex: string;
  firstIndexDimension: string;
  secondIndexDimension: string;
  allFirstIndexDimension: string[];
  allSecondIndexDimnesions: string[];
  allIndexDimenssions: LocalizedDimensionCode[];
  commentToOrder: string;



  constructor(private authenticationService: AuthenticationService,
              private dimensionCodesBackendService: DimensionCodeBackendService) {
    this.initTableForm();
  }

  initTableForm(): void {
    this.tableForm = new FormGroup({
      workingTemperature: new FormControl(null, [Validators.required]),
      workingSide: new FormControl(null, [Validators.required]),
      antiEelectrostatic: new FormControl(false)
    });
  }

  // tslint:disable-next-line:typedef
  get workingTemperature() {
    return this.tableForm.get('workingTemperature');
  }

  // tslint:disable-next-line:typedef
  get workingSide() {
    return this.tableForm.get('workingSide');
  }

  // tslint:disable-next-line:typedef
  get antiEelectrostatic() {
    return this.tableForm.get('antiEelectrostatic');
  }

  public buildIndex(): void {
    this.setMaterialPartialCodeForIndex();
    this.setFirstIndexDimension();
    this.setSecondIndexDimension();
    this.index = `W${this.productTypeCode + this.productTopCode + this.productBottomCode + this.materialPartialCodeForIndex + this.firstIndexDimension + this.secondIndexDimension}`;
  }

  private setFirstIndexDimension(): void {
    if (this.Dvalue) {
      if (this.Dvalue.length === 4) {
        this.firstIndexDimension = `0${this.Dvalue}`;
      }
      if (this.Dvalue.length === 3) {
        this.firstIndexDimension = `00${this.Dvalue}`;
      }
      if (this.Dvalue.length === 2) {
        this.firstIndexDimension = `000${this.Dvalue}`;
      }
      if (this.Dvalue.length === 1) {
        this.firstIndexDimension = `0000${this.Dvalue}`;
      }
    } else {
      this.firstIndexDimension = `00000`;
    }
  }

  private setSecondIndexDimension(): void {
    if (this.Lvalue) {
      if (this.Lvalue.length === 5) {
        this.secondIndexDimension = `${this.Lvalue}`;
      }
      if (this.Lvalue.length === 4) {
        this.secondIndexDimension = `0${this.Lvalue}`;
      }
      if (this.Lvalue.length === 3) {
        this.secondIndexDimension = `00${this.Lvalue}`;
      }
      if (this.Lvalue.length === 2) {
        this.secondIndexDimension = `000${this.Lvalue}`;
      }
      if (this.Lvalue.length === 1) {
        this.secondIndexDimension = `0000${this.Lvalue}`;
      }
    } else {
      this.secondIndexDimension = `00000`;
    }
  }

  private setMaterialPartialCodeForIndex(): void {
    if (this.materialCode && this.materialCode.length > 0) {
      this.materialPartialCodeForIndex = this.materialCode.substring(3);
    } else {
      this.materialPartialCodeForIndex = '000';
    }

  }

  public setOrderName(): void {
    if (this.Dvalue && this.Lvalue) {
      this.orderName = `${this.productTypeName}  ${this.Dvalue}  x  ${this.Lvalue} mm ${this.materialCode}`;
    } else if (this.Dvalue && !this.Lvalue) {
      this.orderName = `${this.productTypeName}  ${this.Dvalue}  x  0 mm ${this.materialCode}`;
    } else if (!this.Dvalue && this.Lvalue) {
      this.orderName = `${this.productTypeName}  0  x  ${this.Lvalue} mm ${this.materialCode}`;
    } else {
      this.orderName = `${this.productTypeName}  0  x  0 mm ${this.materialCode}`;
    }
  }
public setPartialOrderName(): string{
    let partialOrderName: string;
  if (this.Dvalue && this.Lvalue) {
    partialOrderName= `${this.Dvalue}  x  ${this.Lvalue} mm ${this.materialCode}`;
  } else if (this.Dvalue && !this.Lvalue) {
    partialOrderName = `${this.Dvalue}  x  0 mm ${this.materialCode}`;
  } else if (!this.Dvalue && this.Lvalue) {
    partialOrderName = `0  x  ${this.Lvalue} mm ${this.materialCode}`;
  } else {
    partialOrderName = `0  x  0 mm ${this.materialCode}`;
  }
  return partialOrderName;


}

  /*  remember that createOrderDto is obtained in diffrentWay for diffrent modes*/
  setInitDataFromDrawingTableFromCreateOrderDto(createOrderDto?: CreateOrderDto, createProductDto?: CreateProductDto): void {
    this.resetTableFormServiceProperties();
    if (createOrderDto && createOrderDto.orderTotalNumber) {
      this.orderTotalNumber = createOrderDto.orderTotalNumber;
    } else {
      this.orderTotalNumber = '';
    }
    if (createOrderDto && createOrderDto.creator) {
      this.orderCreator = createOrderDto.creator.fulName;
    } else {
      this.orderCreator = '';
    }
    if (createOrderDto && createOrderDto.date) {
      this.date = new Date(createOrderDto.date);
    } else {
      this.date = null;
    }
    if (createOrderDto && createOrderDto.productMaterial) {
      this.materialCode = createOrderDto.productMaterial.materialCode;
      this.materialName = createOrderDto.productMaterial.materialName;
      if(createOrderDto.addMaterialDescription){
        this.materialDescriptionInSelectedLanguage= getSelectedLanguageFromNamesInAllLanguages(createOrderDto.productMaterial.localizedNames, this.authenticationService.selectedLanguageCode);
      }
      else {
        this.materialDescriptionInSelectedLanguage=''
      }

    } else {
      this.materialCode = '';
      this.materialName = '';
      this.materialDescriptionInSelectedLanguage='';

    }
    if(createOrderDto&&createOrderDto.commentToOrder){
      this.commentToOrder=createOrderDto.commentToOrder;
    }
    else {
      this.commentToOrder='';
    }
    if (createOrderDto && createOrderDto.product) {
      // tslint:disable-next-line:max-line-length
      this.productTypeName = getSelectedLanguageFromNamesInAllLanguages(createOrderDto.product.productType.localizedNames, this.authenticationService.selectedLanguageCode);
      this.productTypeCode = createOrderDto.product.productType.code;
      this.productBottomCode = createOrderDto.product.productBottom.code;
      this.productTopCode = createOrderDto.product.productTop.code;
    }
    else if (createProductDto) {
      // tslint:disable-next-line:max-line-length
      this.productTypeName = getSelectedLanguageFromNamesInAllLanguages(createProductDto.productType.localizedNames, this.authenticationService.selectedLanguageCode);
      this.productTypeCode = createProductDto.productType.code;
      this.productBottomCode = createProductDto.productBottom.code;
      this.productTopCode = createProductDto.productTop.code;
    }
      else {
      this.productTypeName = '';
      this.productTypeCode = '00';
      this.productBottomCode = '0';
      this.productTopCode = '0';
    }
    if (createOrderDto && createOrderDto.orderDetails) {
      this.workingTemperature.setValue(createOrderDto.orderDetails.workingTemperature);
      this.workingSide.setValue(createOrderDto.orderDetails.workingSide);
      if (createOrderDto.orderDetails.antiEelectrostatic) {
        this.antiEelectrostatic.setValue(createOrderDto.orderDetails.antiEelectrostatic);
      }
      if (createOrderDto.orderDetails.dimensions) {
        const dimensions = createOrderDto.orderDetails.dimensions;
        dimensions.forEach((dimension) => {
          const dimensionCodeForDimensionId = this.allIndexDimenssions.filter(d => d.id ===Number(dimension.dimensionId))[0].dimensionCode;
          if (this.allFirstIndexDimension.includes(dimensionCodeForDimensionId)) {
            this.Dvalue = dimension.dimensionvalue;
          }
          if (this.allSecondIndexDimnesions.includes(dimensionCodeForDimensionId)) {
            this.Lvalue = dimension.dimensionvalue;
          }
        });
      }
    }
    if (createOrderDto && createOrderDto.index) {
      this.index = createOrderDto.index;
    } else {
      this.buildIndex();
    }

    this.setOrderName();
  }

  enableTableForm(): void {
    this.antiEelectrostatic.enable();
    this.workingSide.enable();
    this.workingTemperature.enable();
  }

  disableTableForm(): void {
    this.antiEelectrostatic.disable();
    this.workingSide.disable();
    this.workingTemperature.disable();
  }

  resetTableFormServiceProperties(): void {
    this.index = '';
    this.orderCreator = '';
    this.orderName = '';
    this.date = null;
    this.materialName = '';
    this.materialCode = '';
    this.Lvalue = '';
    this.Dvalue = '';
    this.productTypeName = '';
    this.productTypeCode = '';
    this.productTopCode = '';
    this.productBottomCode = '';
    this.materialPartialCodeForIndex = '';
    this.firstIndexDimension = '';
    this.secondIndexDimension = '';
    this.antiEelectrostatic.setValue(false);
    this.workingSide.setValue(null);
    this.workingTemperature.setValue(null);
  }

  setMaterialInformation():string{
    return this.materialName+' '+ this.materialCode+' '+ this.materialDescriptionInSelectedLanguage;
  }
  setDimensionCodesFromSessionStorage():void{
    this.allSecondIndexDimnesions= JSON.parse(sessionStorage.getItem('allSecondIndexDimnesions'));
    this.allFirstIndexDimension=JSON.parse(sessionStorage.getItem('allFirstIndexDimension'));
  }
  addDimensionCodesToSessionStorage(): void{
    sessionStorage.setItem('allSecondIndexDimnesions', JSON.stringify(this.allSecondIndexDimnesions));
    sessionStorage.setItem('allFirstIndexDimension', JSON.stringify(this.allFirstIndexDimension));
  }
  async setDimensionCodesInDrawingTableFormService (): Promise<void> {
    const allDimensions = await this.dimensionCodesBackendService.getRecords().toPromise();
    const allDimensionCodes = this.getLocalizedNameFromAllLanguage(allDimensions.body);
    this.allIndexDimenssions = allDimensionCodes;
    const firstDimensions= await this.dimensionCodesBackendService.getFirstIndexDimensions().toPromise();
    this.allFirstIndexDimension = [];
    this.allFirstIndexDimension=firstDimensions.body.map(dimension=>dimension.dimensionCode);
    const secondDimensions=await this.dimensionCodesBackendService.getSecondIndexDimensions().toPromise();
    this.allSecondIndexDimnesions = secondDimensions.body.map(dimension=> dimension.dimensionCode);
   // this.addDimensionCodesToSessionStorage();

  }
  getLocalizedNameFromAllLanguage(dimensnionCodes: DimensionCode[]): LocalizedDimensionCode[] {
    const localizedDimensionCodes: LocalizedDimensionCode[] = [];
    dimensnionCodes.forEach((dimensionCOde) => {
      dimensionCOde.localizedDimensionNames.forEach((localizedName) => {
        if (localizedName.language.languageCode === this.authenticationService.selectedLanguageCode) {
          const localizedCode: LocalizedDimensionCode = {
            ...dimensionCOde,
            localizedDimensionName: localizedName
          };
          localizedDimensionCodes.push(localizedCode);
        }
      });
    });
    return localizedDimensionCodes;
  }

}

