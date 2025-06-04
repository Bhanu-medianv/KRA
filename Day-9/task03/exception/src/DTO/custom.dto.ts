import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
@ValidatorConstraint({name:'isOlder' , async:false})
export class Isolder implements ValidatorConstraintInterface{
    validate(pdob:string , args:ValidationArguments){
        const minage = args.constraints[0] 
        const dob = new Date(pdob) 
        const currdate = new Date()
        const req_age = new Date(currdate.getFullYear() - minage , currdate.getMonth() , currdate.getDate() )
        return dob <=req_age
        
    }
    defaultMessage(validationArguments?: ValidationArguments): string {
        return "person is younger"
    }
}