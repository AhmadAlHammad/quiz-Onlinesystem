import { Controller, Get, Post, Body, Request, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { JwtAuthGuard } from 'src/auth/auth/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}
@UseGuards(JwtAuthGuard,RolesGuard)
@Roles('admin')
  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto , @Request() req) {
    const user = req.user;
    return this.questionsService.create(createQuestionDto,user);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.questionsService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionsService.findOne(+id);
  }
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles('admin')
  @Put(':id')
  update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto , @Request() req) {
    const user = req.user;
    return this.questionsService.update(+id, updateQuestionDto,user);
  }
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles('admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionsService.remove(+id);
  }
}
