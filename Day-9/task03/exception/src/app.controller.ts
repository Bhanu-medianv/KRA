import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Res,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAuthDto } from './DTO/user.dto';
import { HttpExceptionFilter } from './exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  create(@Body(ValidationPipe) createdto: CreateAuthDto) {
    return createdto;
  }
}
