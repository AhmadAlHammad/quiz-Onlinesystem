  import { Injectable } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { Response } from './entities/response.entity';
import { CreateResponseDto } from 'src/responses/dto/create-response.dto';

  @Injectable()
  export class ResponsesService {
    constructor(
      @InjectRepository(Response)
      private responseRepository: Repository<Response>,
      
      
    ) {}

    async createResponse(
      CreateResponseDto: CreateResponseDto,
      user: any,
      quizId: string,
      questionId: string,
      selectedOptionId: string
    ): Promise<Response | any> {
      console.log("Received quizId:", quizId);
    
      const response = this.responseRepository.create({
        ...CreateResponseDto,
        user: { id: user.userId }, 
        quiz: { id: quizId },
        question: { id: questionId },
        selectedOption: { id: selectedOptionId },
        createdBy: user.userId,  
        updatedBy: user.userId   
      });
    
      const savedResponse = await this.responseRepository.save(response);
    
      return this.responseRepository
        .createQueryBuilder('response')
        .leftJoinAndSelect('response.quiz', 'quiz')
        .leftJoinAndSelect('response.user', 'user')
        .leftJoinAndSelect('response.question', 'question')
        .leftJoinAndSelect('response.selectedOption',   'selectedOption') 
         .leftJoinAndSelect('response.createdBy', 'createdBy')  .leftJoinAndSelect('response.updatedBy', 'updatedBy')
        .where('response.id = :id', { id: savedResponse.id })
        .getOne();
    }
    async deleteResponse(id: string): Promise<void> {
      await this.responseRepository.delete(id);
    }
  }
