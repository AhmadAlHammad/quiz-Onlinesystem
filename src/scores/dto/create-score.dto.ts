import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';
export class CreateScoreDto {
  @IsUUID()
  @IsNotEmpty()
  user_id: string;

  @IsInt()
  @IsNotEmpty()
  score: number;
}
