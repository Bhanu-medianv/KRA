import { IsEnum, IsNumber, IsString } from "class-validator";

export enum eRole{
    INTERN = 'INTERN',
    ADMIN = "ADMIN",
    GUEST = "GUEST"
}

export class orderDto{
    @IsString()
    name:string
    @IsNumber()
    id:number
    @IsEnum(eRole)
    role:eRole

}