import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto'; 
import * as bcrypt from 'bcryptjs';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    findOneById(userId: any) {
        throw new Error('Method not implemented.');
    }
  constructor(
    @InjectRepository(User) 
    private readonly usersRepository: Repository<User>,
  ) {}
  async findOne(username: string): Promise<User | any> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async create(createUserDto: CreateUserDto , currentUser : User): Promise<User | string> {
    const { username, email, password, role } = createUserDto;

    const existingUser = await this.usersRepository.findOne({ where: { email } });
    if (existingUser) {
      return 'User with this email already exists';
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.usersRepository.create({
      username,
      email,
      password: hashedPassword,
      role,
      createdBy:currentUser 
    });

    await this.usersRepository.save(newUser);

    return newUser; 
  }

   findAll(): Promise<User[]> {
const users = this.usersRepository.find();
    return users;
  }

  async update(id: string, updateUserDto: UpdateUserDto , currentUser : User): Promise<User|any> {
   
if(!id){
  throw new NotFoundException(`User with ID ${id} not found`);
}

const useUpdate = await this.usersRepository.findOne({where : {id}});
if (!useUpdate) {
  throw new NotFoundException(`User with ID ${id} not found`);
}

if (updateUserDto.password) {
  updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
}
updateUserDto.updatedBy= currentUser;
await this.usersRepository.update(id, updateUserDto);

const returnedUpdated =  this.usersRepository.findOne({where:{id}});
return returnedUpdated;

  }

  async remove(id: string): Promise<void> {
  if(!id){
    throw new NotFoundException(`User with ID ${id} not found`)
  }  
  await this.usersRepository.delete(id);
  }
}