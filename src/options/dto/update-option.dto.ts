import { PartialType } from '@nestjs/mapped-types';
import { CreateOptionQuizDto } from './create-option-quiz';
import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateOptionDto extends PartialType(CreateOptionQuizDto) {
    
  
    @IsUUID()
    @IsNotEmpty()
    question_id: string;
  
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
