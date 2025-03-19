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

  async createScore(
    createScoreDto: CreateScoreDto,
    user: any,  
    quizId: string,
    scoreValue: number
  ): Promise<Score | null > {
    console.log("Received quizId:", quizId);

    const score = this.scoreRepository.create({
      ...createScoreDto,
      user: { id: user.userId }, 
      quiz: { id: quizId },
      score: scoreValue,  
      createdBy: user.userId,  
      updatedBy: user.userId   
    });

    const savedScore = await this.scoreRepository.save(score);

    return this.scoreRepository
      .createQueryBuilder('score')
      .leftJoinAndSelect('score.quiz', 'quiz')
      .leftJoinAndSelect('score.user', 'user')
      .leftJoinAndSelect('score.createdBy', 'createdBy')
      .leftJoinAndSelect('score.updatedBy', 'updatedBy')
      .where('score.id = :id', { id: savedScore.id })
      .getOne();
  }

  async deleteScore(id: string): Promise<void> {
    await this.scoreRepository.delete(id);
  }

  async findScoreById(id: string): Promise<Score | null> {
    return this.scoreRepository
      .createQueryBuilder('score')
      .leftJoinAndSelect('score.quiz', 'quiz')
      .leftJoinAndSelect('score.user', 'user')
      .leftJoinAndSelect('score.createdBy', 'createdBy')
      .leftJoinAndSelect('score.updatedBy', 'updatedBy')
      .where('score.id = :id', { id })
      .getOne();
  }


  async findAll(): Promise<Score[]> {
    return this.scoreRepository.find();
  }

  
  async remove(id: number): Promise<void> {
    await this.scoreRepository.delete(id);
  }
}
