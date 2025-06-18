import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from 'src/users/DTO/user.dto';
import { ROLES_KEY } from './role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    if(!user || !user.role){
        return false
    }
    return requiredRoles.some((role) => user.role?.includes(role));
  }
}
