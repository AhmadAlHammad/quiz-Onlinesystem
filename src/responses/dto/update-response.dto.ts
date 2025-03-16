import { PartialType } from '@nestjs/mapped-types';
import { CreateResponseDto } from './create-response.dto';
import { Option_quize } from 'src/options/entities/option.entity';
import { Type } from 'class-transformer';
import { Question } from 'src/questions/entities/question.entity';
import { Quiz } from 'src/quizzes/entities/quiz.entity';
import { User } from 'src/users/entities/user.entity';

export class UpdateResponseDto extends PartialType(CreateResponseDto) {
     @Type(() => User)
    user: User;

    @Type(() => Quiz)
    quiz: Quiz;

    @Type(() => Question)
    question: Question;

    @Type(() => Option_quize)
    selectedOption: Option_quize;

    created_at: Date;
}
