import { IsBoolean, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateOptionQuizDto { 
   
  
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
