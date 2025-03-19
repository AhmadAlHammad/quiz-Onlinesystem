import { PartialType } from '@nestjs/mapped-types';
import { CreateOptionQuizDto } from './create-option-quiz';
import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Question } from 'src/questions/entities/question.entity';
import { JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class UpdateOptionDto extends PartialType(CreateOptionQuizDto) {
    
     @PrimaryGeneratedColumn('uuid')
     id : string
     
     @IsUUID()
     @IsNotEmpty()
     questionId: string;


    @IsString()
    @IsNotEmpty()
    option_text: string;
  
    @IsBoolean()
    @IsNotEmpty()
    is_correct: boolean;
  
    @IsUUID()
    created_by: string;
  
    @IsUUID()
    updated_by: string;
}
