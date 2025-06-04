import { IsAlpha, IsNumber, Length, Max , Min, Validate } from "class-validator";
import { Isolder } from "./custom.dto";


export class CreateAuthDto{
    @Length(1,40 ,{message:'length should be less then 40'})
    @IsAlpha()
    username:string
    @IsNumber()
    @Min(1,{message:'age must be older than 1'})
    @Max(110,{message:'age must be less then 110'})
    age:number
    @Validate(Isolder ,[15] , {
      message:'dob > 15 yrs'
    })
    dob:string

}

