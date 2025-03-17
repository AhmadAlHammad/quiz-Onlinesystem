import { Controller, Get, Post, Body,Request, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/auth/jwt-auth.guard';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}
@UseGuards(JwtAuthGuard,RolesGuard)
@Roles('admin') 
  @Post()
  create(@Body() createQuizDto: CreateQuizDto, @Request() req) {
    const user = req.user;
    return this.quizzesService.create(createQuizDto,user);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.quizzesService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizzesService.findOne(id);
  }
@UseGuards(JwtAuthGuard,RolesGuard)
@Roles('admin')
  @Put(':id')
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto , @Request() req) {
    const user = req.user;
    return this.quizzesService.update(id, updateQuizDto,user);
  }
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles('admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizzesService.remove(id);
  }
}
