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

  async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    const question = this.questionRepository.create(createQuestionDto);
    return this.questionRepository.save(question);
  }

 async findAll():Promise<Question[]> {
    return this.questionRepository.find();
  }

  async findOne(id: number):Promise<Question | null>{
    return this.questionRepository.findOne({where:{id}});
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
await this.questionRepository.update(id,updateQuestionDto);
return this.questionRepository.findOne({where:{id}});
  }

  async remove(id: number) {
    await this.questionRepository.delete(id);
  }
}
