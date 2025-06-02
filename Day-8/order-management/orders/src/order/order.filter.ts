import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request , Response } from 'express';
import { timeStamp } from 'console';

@Catch(HttpException)
export class OrderFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context  = host.switchToHttp()
    const response = context.getResponse<Response>()
    const request = context.getRequest<Request>()
    const status = exception.getStatus()
    response.status(status).json({
        statusCode:status,
        timeStamp:new Date().toDateString(),
        path:request.url
    })
  }
}
