import { Module } from '@nestjs/common';
import { OptionQuizService } from './options.service';
import { OptionsController } from './options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option_quize } from './entities/option.entity';
import { AuthModule } from 'src/auth/auth.module';
@Module({
    imports: [TypeOrmModule.forFeature([Option_quize])
  ,AuthModule],
  
  controllers: [OptionsController],
  providers: [OptionQuizService],
})
export class OptionsModule {}
