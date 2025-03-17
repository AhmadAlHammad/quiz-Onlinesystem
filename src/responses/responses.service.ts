import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from './entities/response.entity';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';

@Injectable()
export class ResponsesService {
  constructor(
    @InjectRepository(Response)
    private readonly responseRepository: Repository<Response>,
  ) {}

  async create(createResponseDto: CreateResponseDto): Promise<Response | null> {
    const response = this.responseRepository.create(createResponseDto);
    return this.responseRepository.save(response);
  }

  async findAll(): Promise<Response[]> {
    return this.responseRepository.find();
  }

  async findOne(id: string): Promise<Response | null> {
    return this.responseRepository.findOne({where:{id}});
  }

  async update(id: string, updateResponseDto: UpdateResponseDto): Promise<Response | null > {
    await this.responseRepository.update(id, updateResponseDto);
    return this.responseRepository.findOne({where:{id}});
  }

  async remove(id: string): Promise<void> {
    await this.responseRepository.delete(id);
  }
}
