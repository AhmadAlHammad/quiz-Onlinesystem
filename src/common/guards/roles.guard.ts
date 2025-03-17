import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    console.log('Request in RolesGuard:', request.user); 

    const user = request.user;  
    console.log('User in RolesGuard:', user); 

    if (!user || !user.role) {
      throw new UnauthorizedException('User does not have a role assigned or is not authenticated');
    }

    return roles.includes(user.role);
  }
}
