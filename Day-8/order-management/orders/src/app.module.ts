import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { OrderMiddleware } from './order/order.middleware';

@Module({
  imports: [OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(OrderMiddleware)
    // .forRoutes('order')
    .forRoutes({path:'order' , method:RequestMethod.GET})
  }
}
