import { IsNotEmpty} from 'class-validator';



export class CreateResponseDto {
    @IsNotEmpty()
    user_id: string;
  
    @IsNotEmpty()
    quiz_id: string;
  
    @IsNotEmpty()
    question_id: string;
  
    @IsNotEmpty()
    selected_option_id: string;
  
  }

