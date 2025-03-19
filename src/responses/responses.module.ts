import { Module } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { ResponsesController } from './responses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { Option_quize } from 'src/options/entities/option.entity';
import { User } from 'src/users/entities/user.entity';
import { Question } from 'src/questions/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Response,Option_quize, User, Question]),
UsersModule],

  controllers: [ResponsesController],
  providers: [ResponsesService],
})
export class ResponsesModule {}
