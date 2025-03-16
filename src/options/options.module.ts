import { Module } from '@nestjs/common';
import { OptionQuizService } from './options.service';
import { OptionsController } from './options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option_quize } from './entities/option.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Option_quize])],
  
  controllers: [OptionsController],
  providers: [OptionQuizService],
})
export class OptionsModule {}
