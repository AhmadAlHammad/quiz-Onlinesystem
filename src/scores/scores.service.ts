import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from './entities/score.entity';
import { CreateScoreDto } from './dto/create-score.dto';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score)
    private readonly scoreRepository: Repository<Score>,
  ) {}

  async create(createScoreDto: CreateScoreDto): Promise<Score> {
    const score = this.scoreRepository.create(createScoreDto);
    return this.scoreRepository.save(score);
  }

  async findAll(): Promise<Score[]> {
    return this.scoreRepository.find();
  }

  async findOne(id: number): Promise<Score | null> {
    return this.scoreRepository.findOne({where:{id}});
  }

  async update(id: number, updateScoreDto: CreateScoreDto): Promise<Score | null> {
    await this.scoreRepository.update(id, updateScoreDto);
    return this.scoreRepository.findOne({where:{id}});
  }

  async remove(id: number): Promise<void> {
    await this.scoreRepository.delete(id);
  }
}
