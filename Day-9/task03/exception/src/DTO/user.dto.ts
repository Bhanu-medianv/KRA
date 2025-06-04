import { IsAlpha, IsNumber, Length, Matches, Max , Min, Validate } from "class-validator";
import { Isolder } from "./custom.dto";


export class CreateAuthDto{
    @Length(1,40 ,{message:'length should be less then 40'})
    
    @Matches(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/ ,{message : "Name should contain only Alphabets and contains only one space"})
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

