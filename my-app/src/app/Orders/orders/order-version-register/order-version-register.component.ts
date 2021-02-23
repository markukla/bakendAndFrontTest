import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import OrderforTableCell from '../../OrdersTypesAndClasses/orderforTableCell';
import {OrderTableService} from '../OrderServices/order-table.service';
import {OrderBackendService} from '../OrderServices/order-backend.service';
import {ActivatedRoute, Router} from '@angular/router';
import OrderOperationMode from '../../OrdersTypesAndClasses/orderOperationMode';
import {VersionRegisterTableService} from '../OrderServices/version-register-table.service';
import OrderVersionRegister from '../../OrdersTypesAndClasses/orderVersionRegister';
import Order from '../../OrdersTypesAndClasses/orderEntity';
import {Sort} from '../../../util/sort';
import {GeneralTableService} from '../../../util/GeneralTableService/general-table.service';
import {
  generalNamesInSelectedLanguage,
  generalUserNames,
  orderNames
} from "../../../helpers/otherGeneralUseFunction/generalObjectWIthTableColumnDescription";
import {setTabelColumnAndOtherNamesForSelectedLanguage} from "../../../helpers/otherGeneralUseFunction/getNameInGivenLanguage";
import {AuthenticationService} from "../../../LoginandLogOut/AuthenticationServices/authentication.service";

@Component({
  selector: 'app-order-version-register',
  templateUrl: './order-version-register.component.html',
  styleUrls: ['./order-version-register.component.css']
})
export class OrderVersionRegisterComponent implements OnInit, AfterContentChecked {

  @Input()
  records: OrderforTableCell[];
  createNewRecordDescription = 'Dodaj Nowy';
  // tslint:disable-next-line:ban-types
  deleTedMaterialMessage: any;
  operationStatusMessage: string;
  deleteButtonInfo: string;
  showUpdateForm = false;
  updateButtonInfo;
  materialId: number;
  recordNumbers: number;
  selectedOrderId: string;
  orderVersionRegister: OrderVersionRegister;
  ordersInRegister: Order[];
  orderNames = orderNames;
  generalUserNames = generalUserNames;
  generalNamesInSelectedLanguage = generalNamesInSelectedLanguage;


  constructor(
    public orderTableService: GeneralTableService,
    public orderRegisterTableService: VersionRegisterTableService,
    public backendService: OrderBackendService,
    private router: Router,
    private route: ActivatedRoute,
    private activedIdParam: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.initColumnNamesInSelectedLanguage();
    this.records = [];
    this.route.queryParamMap.subscribe(queryParams => {
      this.selectedOrderId = queryParams.get('orderId');
    });
    this.getRecords();

  }
  initColumnNamesInSelectedLanguage(): void {
    // tslint:disable-next-line:max-line-length
    setTabelColumnAndOtherNamesForSelectedLanguage(this.orderNames, this.authenticationService.vocabulariesInSelectedLanguage);
    // tslint:disable-next-line:max-line-length
    setTabelColumnAndOtherNamesForSelectedLanguage(this.generalNamesInSelectedLanguage, this.authenticationService.vocabulariesInSelectedLanguage);
    setTabelColumnAndOtherNamesForSelectedLanguage(this.generalUserNames, this.authenticationService.vocabulariesInSelectedLanguage);
    this.deleteButtonInfo = this.generalNamesInSelectedLanguage.deleteButtonInfo;
    this.updateButtonInfo = this.generalNamesInSelectedLanguage.updateButtonInfo;
  }

  ngAfterContentChecked(): void {
    if (this.records) {
      this.recordNumbers = this.records.length;
    }
  }

  getRecords(): void {
    this.backendService.findRecordById(this.selectedOrderId).subscribe((order) => {
      this.backendService.findOrderVersionRegisterById(String(order.body.orderVersionRegister.id)).subscribe((register) => {
          this.orderVersionRegister = register.body;
          this.ordersInRegister = this.orderVersionRegister.ordersInthisRegister;
          this.ordersInRegister.forEach((order) => {
              this.records.push(this.backendService.createOrderTableCellFromOrderEntity(order));
              const sort = new Sort();
              this.records.sort(sort.startSort('date', 'desc', 'date'));
            }
          );
        }, error => {
          console.error('could not get order version register');
        }
      );
    });
  }

  showDrawing(id: number): void {
    this.router.navigateByUrl(`orders/drawing?orderId=${id}&mode=${OrderOperationMode.SHOWDRAWING}`);
  }
}
