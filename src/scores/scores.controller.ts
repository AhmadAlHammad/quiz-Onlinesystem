import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { CreateScoreDto } from './dto/create-score.dto';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post(':user_id')
  async create(@Param('user_id') user_id: string,@Body()  quiz_id,score,createscoreDto:CreateScoreDto){
    return this.scoresService.createScore(createscoreDto,quiz_id,user_id,score);
  }

  @Get()
  findAll() {
    return this.scoresService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scoresService.remove(+id);
  }
}
