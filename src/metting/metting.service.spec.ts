import { Test, TestingModule } from '@nestjs/testing';
import { MettingService } from './metting.service';

describe('MettingService', () => {
  let service: MettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MettingService],
    }).compile();

    service = module.get<MettingService>(MettingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
