import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class UsersExceptionFilter implements ExceptionFilter {
  catch(exception:HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp()
    const response = context.getResponse<Response>
    const request = context.getRequest<Request>
    const status = exception.getStatus() 
  }
}
