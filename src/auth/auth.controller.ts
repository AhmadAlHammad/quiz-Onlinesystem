import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/entities/user.entity'; 

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: User) {
    const validatedUser = await this.authService.validateUser(user.username, user.password);

    if (!validatedUser) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.authService.signIn(validatedUser); 
  }
}
