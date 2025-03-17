import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtAuthService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers['authorization'];

    if (!authorization) {
      throw new UnauthorizedException('Unauthorized');
    }

    const [bearer, token] = authorization.split(' ');

    if (bearer !== 'Bearer') {
      throw new UnauthorizedException('Invalid token format');
    }

    const user = await this.jwtAuthService.verifyToken(token);
    console.log('User from token:', user);

    if (!user) {
      throw new UnauthorizedException('Invalid or expired token');
    }

    request.user = user;  
    return true;
  }
}
