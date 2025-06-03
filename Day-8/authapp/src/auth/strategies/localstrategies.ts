import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { AuthService } from "../auth.service";

@Injectable()
export class Localstrategies extends PassportStrategy(Strategy){
    constructor(private authservices:AuthService){
        super()
    }
    validate(username:string , password:string){
        console.log("local strategy")
        const user = this.authservices.validateuser({username , password})
        if(!user) throw new UnauthorizedException
        return user
    }
}