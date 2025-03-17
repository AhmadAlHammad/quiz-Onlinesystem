import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { IsNull, Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class QuizzesService {

  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}
  
  
  async create(createQuizDto: CreateQuizDto, user: any): Promise<Quiz> {
    
    const quiz = this.quizRepository.create({
      ...createQuizDto,
      createdBy: user.userId, 
    });
  
    return this.quizRepository.save(quiz);
  }
  async findAll():Promise<Quiz[]> {
 return this.quizRepository.find();
  }


  async findOne(id: string): Promise<Quiz | null > {
    if(!id){
      throw new NotFoundException(`The quie have this ${id} is not found`) ;
    }
    return this.quizRepository.findOne({where:{id}});
  }

  async update(id: string, updateQuizDto: UpdateQuizDto):Promise<Quiz | null> {
    await this.quizRepository.update(id,updateQuizDto);
    return this.quizRepository.findOne({where:{id}});
  }

  async remove(id: string): Promise<void> {
    await this.quizRepository.delete(id);
  }
}
