import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option_quize } from './entities/option.entity';
import { CreateOptionQuizDto } from './dto/create-option-quiz';
import { User } from 'src/users/entities/user.entity';
import { Question } from 'src/questions/entities/question.entity';

@Injectable()
export class OptionQuizService {
  constructor(
    @InjectRepository(Option_quize)
    private readonly optionQuizRepository: Repository<Option_quize>
  ) {}

  async create(createOptionQuizDto: CreateOptionQuizDto , user:any,questionId:any): Promise<Option_quize |null> {
    const optionQuiz = this.optionQuizRepository.create({...createOptionQuizDto, createdBy : user.userId,updatedBy : user.userId,question: { id: questionId } });
    
   const savedOption =  await this.optionQuizRepository.save(optionQuiz);


    return this.optionQuizRepository.createQueryBuilder('optionQuiz').leftJoinAndSelect('optionQuiz.question','question').leftJoinAndSelect('optionQuiz.createdBy', 'createdBy').leftJoinAndSelect('optionQuiz.updatedBy', 'updatedBy').where('optionQuiz.id = :id', { id: savedOption.id }).getOne();

    }
  
  

  async findAll(): Promise<Option_quize[]> {
    return this.optionQuizRepository.find();
  }

  async findOne(id: string): Promise<Option_quize | null> {
    return this.optionQuizRepository.findOne({where:{id}});
  }

  async update(id: string, updateOptionQuizDto: CreateOptionQuizDto , user:any): Promise<Option_quize | null> {
    await this.optionQuizRepository.update(id, {...updateOptionQuizDto , updatedBy:user.userId});
    return this.optionQuizRepository.findOne({where:{id}});
  }

  async remove(id: number): Promise<void> {
    await this.optionQuizRepository.delete(id);
  }
}
