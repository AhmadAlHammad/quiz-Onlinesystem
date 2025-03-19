import { Controller, Get,Param, Delete, UseGuards, Body, Post,  } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { JwtAuthGuard } from 'src/auth/auth/jwt-auth.guard';
import { CreateResponseDto } from 'src/responses/dto/create-response.dto';



@Controller('responses')
export class ResponsesController {
  constructor(private readonly responsesService: ResponsesService) {}

  @Post(':user_id')
  async createResponse(@Param('user_id') user_id: string, @Body()  quiz_id, question_id, selected_option_id, createResponseDto : CreateResponseDto, ) {
    return this.responsesService.createResponse(
      createResponseDto,
      user_id,
      quiz_id,
      question_id,
      selected_option_id,
    );
  }

  @Delete(':user_id/:id')
  async deleteResponse(
    @Param('user_id') user_id: string,
    @Param('id') id: string,
  ): Promise<void> {
    return this.responsesService.deleteResponse(id);
  }
}
