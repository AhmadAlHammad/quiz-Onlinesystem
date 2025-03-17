import { Controller, Get, Post, Body, Request, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { OptionQuizService } from './options.service';
import { CreateOptionQuizDto } from './dto/create-option-quiz';
import { UpdateOptionDto } from './dto/update-option.dto';
import { JwtAuthGuard } from 'src/auth/auth/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('options')
export class OptionsController {
  constructor(private readonly optionsService: OptionQuizService) {}
 @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles('admin')
  @Post()
  create(@Body() createOptionDto: CreateOptionQuizDto,@Request() req) {
    const user = req.user;
    return this.optionsService.create(createOptionDto,user);
  }
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles('admin')
  @Get()
  findAll() {
    return this.optionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.optionsService.findOne(+id);
  }
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles('admin')
  @Put(':id')
  update(@Param('id') id: number, @Body() UpdateOptionDto: UpdateOptionDto , @Request() req) {
     const user = req.user;
     return this.optionsService.update(id, UpdateOptionDto,user);
  }
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles('admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.optionsService.remove(+id);
  }
}
