import { Test, TestingModule } from '@nestjs/testing';
import { MettingController } from './metting.controller';

describe('MettingController', () => {
  let controller: MettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MettingController],
    }).compile();

    controller = module.get<MettingController>(MettingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
