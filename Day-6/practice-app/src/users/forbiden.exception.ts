import { HttpException, HttpStatus } from "@nestjs/common";

export class Dontseeme extends HttpException{
        constructor(){
            super("this is not allowed ", HttpStatus.FORBIDDEN)
        }
}