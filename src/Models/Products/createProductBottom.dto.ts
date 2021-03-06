import {IsArray, IsString, Length} from "class-validator";
import {Column} from "typeorm";
import LocalizedName from "../LocalizedName/localizedName.entity";

//this class represents fields filled by the user, oter fields like url addresses will be obtained in other way
class CreateProductBottomDto{



    @IsArray()
    localizedNames: LocalizedName [];
    @IsString()
    code:string;







}
export default CreateProductBottomDto;
