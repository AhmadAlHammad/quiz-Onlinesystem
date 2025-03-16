import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option_quize } from './entities/option.entity';
import { CreateOptionQuizDto } from './dto/create-option-quiz';

@Injectable()
export class OptionQuizService {
  constructor(
    @InjectRepository(Option_quize)
    private readonly optionQuizRepository: Repository<Option_quize>,
  ) {}

  async create(createOptionQuizDto: CreateOptionQuizDto): Promise<Option_quize> {
    const optionQuiz = this.optionQuizRepository.create(createOptionQuizDto);
    return this.optionQuizRepository.save(optionQuiz);
  }

  async findAll(): Promise<Option_quize[]> {
    return this.optionQuizRepository.find();
  }

  async findOne(id: number): Promise<Option_quize | null> {
    return this.optionQuizRepository.findOne({where:{id}});
  }

  async update(id: number, updateOptionQuizDto: CreateOptionQuizDto): Promise<Option_quize | null> {
    await this.optionQuizRepository.update(id, updateOptionQuizDto);
    return this.optionQuizRepository.findOne({where:{id}});
  }

  async remove(id: number): Promise<void> {
    await this.optionQuizRepository.delete(id);
  }
}
