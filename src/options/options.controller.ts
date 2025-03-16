import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OptionQuizService } from './options.service';
import { CreateOptionQuizDto } from './dto/create-option-quiz';
import { UpdateOptionDto } from './dto/update-option.dto';

@Controller('options')
export class OptionsController {
  constructor(private readonly optionsService: OptionQuizService) {}

  @Post()
  create(@Body() createOptionDto: CreateOptionQuizDto) {
    return this.optionsService.create(createOptionDto);
  }

  @Get()
  findAll() {
    return this.optionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.optionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOptionDto: UpdateOptionDto) {
    return this.optionsService.update(+id, updateOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.optionsService.remove(+id);
  }
}
