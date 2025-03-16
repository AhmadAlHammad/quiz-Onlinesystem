import { Controller, Get, Post, Body, Param, Delete, Put,Request  } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Request() req): Promise<any> {
    const currentUser: User = req.user;
    return this.usersService.create(createUserDto, currentUser);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }


  @Put(':id') 
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,@Request() req
  ) {
    const currentUser : User =req.user;
    return this.usersService.update(id, updateUserDto,currentUser);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}