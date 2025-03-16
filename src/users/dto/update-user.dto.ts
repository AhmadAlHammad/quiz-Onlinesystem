import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    @IsString()
    username?: string;
  
    @IsOptional() 
    @IsEmail()
    email?: string;
  
    @IsOptional()
    @IsString()
    password?: string;

    
    @IsEnum(['student' , 'admin'])
    role : 'student' | 'admin';
  updatedBy: import("c:/Users/User/Desktop/quizOnlinesystem/quiz-online-system/src/users/entities/user.entity").User;
  }
