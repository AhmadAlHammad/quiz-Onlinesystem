import { Module } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { ResponsesController } from './responses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Response])],
  controllers: [ResponsesController],
  providers: [ResponsesService],
})
export class ResponsesModule {}
