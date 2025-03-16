import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionDto } from './create-question.dto';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {@IsString()
  @IsNotEmpty()
  question_text: string;

  @IsEnum(['multiple_choice', 'true_false'])  
  question_type: 'multiple_choice' | 'true_false';  }
