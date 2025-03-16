import { IsString, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  question_text: string;

  @IsEnum(['multiple_choice', 'true_false'])  
  question_type: 'multiple_choice' | 'true_false';  
}
