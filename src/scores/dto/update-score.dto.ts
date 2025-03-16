import { PartialType } from '@nestjs/mapped-types';
import { CreateScoreDto } from './create-score.dto';
import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateScoreDto extends PartialType(CreateScoreDto) {
 @IsUUID()
  @IsNotEmpty()
  user_id: string;

  @IsInt()
  @IsNotEmpty()
  score: number;
}
