import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module'; 

@Module({
  imports: [UsersModule],  
  controllers: [AuthController],
  providers: [AuthService, JwtService],  
  exports: [AuthService],  
})
export class AuthModule {}
