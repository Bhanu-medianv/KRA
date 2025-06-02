import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class OrderMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const methodname = req.method
    const url=  req.url
    const timestamp = new Date().toDateString()
    console.log(methodname , url ,timestamp)
    next();
  }
}
