import { Module } from '@nestjs/common';
import { MettingController } from './metting.controller';
import { MettingService } from './metting.service';

@Module({
  controllers: [MettingController],
  providers: [MettingService]
})
export class MettingModule {}
