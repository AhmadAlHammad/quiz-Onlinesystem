import { IsBoolean, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { Question } from "src/questions/entities/question.entity";
import { JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class CreateOptionQuizDto { 
   @PrimaryGeneratedColumn('uuid')
   
   id : string
   @IsString()
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
