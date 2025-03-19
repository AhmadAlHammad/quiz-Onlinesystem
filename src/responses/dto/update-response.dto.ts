import { PartialType } from '@nestjs/mapped-types';
import { CreateResponseDto } from './create-response.dto';

import { IsNotEmpty } from 'class-validator';

export class UpdateResponseDto extends PartialType(CreateResponseDto) {
       @IsNotEmpty()
       user_id: string;
     
       @IsNotEmpty()
       quiz_id: string;
     
       @IsNotEmpty()
       question_id: string;
     
       @IsNotEmpty()
       selected_option_id: string;
}
