import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { QuizzesController } from './quizzes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { JwtAuthGuard } from 'src/auth/auth/jwt-auth.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Quiz]),
    AuthModule
  ], 
  controllers: [QuizzesController],
  providers: [QuizzesService],
})
export class QuizzesModule {}
