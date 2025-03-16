import { Test, TestingModule } from '@nestjs/testing';
import { OptionQuizService } from './options.service';

describe('OptionsService', () => {
  let service: OptionQuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OptionQuizService],
    }).compile();

    service = module.get<OptionQuizService>(OptionQuizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
