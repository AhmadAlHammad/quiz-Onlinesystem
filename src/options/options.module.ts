import { Module } from '@nestjs/common';
import { OptionQuizService } from './options.service';
import { OptionsController } from './options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option_quize } from './entities/option.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/users/entities/user.entity';
import { Question } from 'src/questions/entities/question.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Option_quize, User, Question]),
    UsersModule,AuthModule],
  
  controllers: [OptionsController],
  providers: [OptionQuizService],
})
export class OptionsModule {}
