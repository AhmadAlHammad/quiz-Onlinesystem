import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtAuthService: AuthService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers['authorization'];

    if (!authorization) {
      throw new UnauthorizedException('Uncrudintioal');
    }

    const [bearer, token] = authorization.split(' ');

  

    const user = await this.jwtAuthService.verifyToken(token);

    if (!user) {
      throw new UnauthorizedException('Invalid or expired token');
    }

    request.user = user;

    return true;
  }
}
