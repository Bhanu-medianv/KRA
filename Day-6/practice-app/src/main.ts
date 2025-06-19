import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
function globalMiddlewareOne(req:Request ,res:Response , next:NextFunction){
  console.log("this is the middlware  one")
  next()
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddlewareOne)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
