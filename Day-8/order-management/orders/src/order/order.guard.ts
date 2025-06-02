import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { eRole } from './dto/orderdto';
import { roles_key } from './order.decorator';
@Injectable()
// export class OrderGuard implements CanActivate {
//   public key :string = "key234"
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
    
//     const request = context.switchToHttp().getRequest<Request>()
//     return request.header('key') ===this.key;
//   } 
// }
export class OrderGuard{
  constructor (private reflector :Reflector){}
  canActivate(
    context:ExecutionContext,
  ):boolean{
   
    const   requiredRoles = this.reflector.getAllAndOverride<eRole>(roles_key ,[
      context.getHandler(),
      context.getClass()
    ])
    const request = context.switchToHttp().getRequest<Request>()
    const roleFromHeader = request.header('key') as eRole
    return requiredRoles.includes(roleFromHeader)
    
  }
    
}
