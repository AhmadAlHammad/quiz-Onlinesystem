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

    async create(CreateQuestionDto: CreateQuestionDto , user:any,quizId:string): Promise<Question | any > {
      console.log("Received quizId:", quizId);
      const optionQuiz = this.questionRepository.create({...CreateQuestionDto , createdBy : user.userId,updatedBy : user.userId,quiz: { id: quizId }});

      
      const savedQuestion = await this.questionRepository.save(optionQuiz);


      return this.questionRepository.createQueryBuilder('question').leftJoinAndSelect('question.quiz','quiz').leftJoinAndSelect('question.createdBy', 'createdBy').leftJoinAndSelect('question.updatedBy', 'updatedBy').where('question.id = :id', { id: savedQuestion.id }).getOne();

    }
  

 async findAll():Promise<Question[]> {
    return this.questionRepository.find();
  }

  async findOne(id: string):Promise<Question | null>{
    return this.questionRepository.findOne({where:{id}});
  }

 async update(id: string, UpdateQuestionDto: UpdateQuestionDto , user:any): Promise<Question | null> {
    await this.questionRepository.update(id, {...UpdateQuestionDto , updatedBy:user.userId});
    return this.questionRepository.findOne({where:{id}});
  }
  async remove(id: string) {
    await this.questionRepository.delete(id);
  }
}
