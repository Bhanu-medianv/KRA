import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [OrderModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
