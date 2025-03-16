import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';  

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new UnauthorizedException('Invalid username or password');  
    }

    const isPassValid = await bcrypt.compare(password, user.password);
    if (!isPassValid) {
      throw new UnauthorizedException('Invalid username or password'); 
    }

    return user;  
  }

  async signIn(user: User) {
    const payload = { username: user.username, userId: user.id };
    const token = this.jwtService.sign(payload, { secret: 'ahmad' });
    return { message: 'Successfully signed in', token, payload };
  }

  async verifyToken(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token, { secret: 'ahmad' });
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
