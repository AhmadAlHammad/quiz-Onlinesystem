import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';


export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
@IsEnum(['student' , 'admin'])
role : 'student' | 'admin';


}
