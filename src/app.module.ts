import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Quiz } from './quizzes/entities/quiz.entity';
import { Question } from './questions/entities/question.entity';
import { Option_quize } from './options/entities/option.entity'; 
import { Response } from './responses/entities/response.entity';
import { Score } from './scores/entities/score.entity';
import { UsersModule } from './users/users.module';
import { ResponsesModule } from './responses/responses.module';
import { ScoresModule } from './scores/scores.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { QuestionsModule } from './questions/questions.module';
import { OptionsModule } from './options/options.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule, JwtService } from '@nestjs/jwt';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ahmad#198',
      database: 'project_onlinSystem3',
      entities: [User, Quiz, Question, Option_quize, Response, Score], 
      
    }),
    JwtModule.register({
      signOptions: { expiresIn: '1h' }, 
    }),
    UsersModule,
    ScoresModule,
    ResponsesModule,
    QuizzesModule,
    QuestionsModule,
    OptionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
