import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {ProductBottomBackendService} from '../../../Products/ProductBottom/ProductBottomServices/product-bottom-backend.service';
import {ProductBackendService} from '../../../Products/ProductMainComponent/product/ProductServices/product-backend.service';
import {UserBackendService} from "../../../Users/UserServices/user-backend.service";
import {SearchService} from "../SearchDirective/search.service";

@Directive({
  selector: '[appProductSearch]'
})
export class SearchDirectiveWithRandomChars {

  @Input('appProductSearch') searchedArray: Array<any>;


  orginalArrayCopy: Array<any> = [];

  serchCondition: string;

  // tslint:disable-next-line:max-line-length
  @Input() serchedColumn: string; /* insted of this input i could just declate atribute name in html(it creates completly new Atribute in html) than i can access to its value by target elements object */
  temporatyArray: Array<any> = [];

  constructor(private renderer: Renderer2,
              private targetElement: ElementRef,
              private usersBackendService: UserBackendService,
              private searchService: SearchService) {
  }

  @HostListener('input')
// tslint:disable-next-line:typedef
  serchTable() {
    this.orginalArrayCopy = this.searchService.orginalArrayCopy;
    const elem = this.targetElement.nativeElement;

    // tslint:disable-next-line:max-line-length
    /*remember using directives it is better to access element property using target element than doing some extra binding with ng model etc */
    this.serchCondition = elem.value;
    this.temporatyArray.length = 0;
    this.searchedArray.length = 0;
    //   this.temporatyArray= this.orginalArrayCopy.filter(
    //    x=> x[this.serchedColumn].includes(this.serchCondition.toUpperCase())
    // );
    this.orginalArrayCopy.forEach((record)=>{

          const codeAscharArray= Array.from(this.serchCondition);
          const columnRecordValue=record[this.serchedColumn];
          const charsFromColumnRecordValue = Array.from(columnRecordValue);
          let searchIncludesAllCharsAndIndexesMatch= true;

            codeAscharArray.forEach((charFromSearchInput, indexOfSearchString) => {
/* if(charsFromColumnRecordValue.includes(charFromSearchInput)===false&& charFromSearchInput!=='*'){
                searchIncludesAllCharsAndIndexesMatch= false;
              }*/
                if(columnRecordValue.charAt(indexOfSearchString)!=charFromSearchInput && charFromSearchInput!=='*'){
                  searchIncludesAllCharsAndIndexesMatch= false;

                }
            });
            if(searchIncludesAllCharsAndIndexesMatch===true){
              this.temporatyArray.push(record);
            }



    });


    // tslint:disable-next-line:max-line-length
    /*when i use filter to serch array it some how does not work, because it is creating new instance of array and directive is bind to previous instance*/
    /*that is why a remove all elements in orginal array and push there temporary array values*/
    this.searchedArray.length = 0;
    this.searchedArray.push(...this.temporatyArray);


    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.searchedArray.length; i++) {
      console.log(this.searchedArray[i]);
    }
  }



}
