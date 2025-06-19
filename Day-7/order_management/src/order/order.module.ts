import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PaymentService } from 'src/payment/payment.service';
import { PaymentModule } from 'src/payment/payment.module';

@Module({
  providers: [OrderService],
  controllers: [OrderController],
  imports:[PaymentModule],
  exports:[OrderService]
})
export class OrderModule {}
