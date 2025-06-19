import { forwardRef, Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { OrderService } from 'src/order/order.service';
import { OrderModule } from 'src/order/order.module';

@Module({
  providers: [PaymentService],
  controllers: [PaymentController],
  imports:[forwardRef(()=>OrderModule)],
  exports:[PaymentService]
})
export class PaymentModule {}
