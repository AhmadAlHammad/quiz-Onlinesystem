import { Question } from 'src/questions/entities/question.entity';
import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

    async create(CreateQuestionDto: CreateQuestionDto , user:any): Promise<Question > {
      const optionQuiz = this.questionRepository.create({...CreateQuestionDto , createdBy : user.userId});
      return this.questionRepository.save(optionQuiz);
    }
  

 async findAll():Promise<Question[]> {
    return this.questionRepository.find();
  }

  async findOne(id: number):Promise<Question | null>{
    return this.questionRepository.findOne({where:{id}});
  }

 async update(id: number, UpdateQuestionDto: UpdateQuestionDto , user:any): Promise<Question | null> {
    await this.questionRepository.update(id, {...UpdateQuestionDto , updatedBy:user.userId});
    return this.questionRepository.findOne({where:{id}});
  }
  async remove(id: number) {
    await this.questionRepository.delete(id);
  }
}
