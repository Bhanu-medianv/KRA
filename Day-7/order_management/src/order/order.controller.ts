import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, ValidationPipe } from '@nestjs/common';
import { OrderDto } from './DTO/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderservices:OrderService){}
    @Post()
    create(@Body(ValidationPipe) orderdto:OrderDto){
        return this.orderservices.create(orderdto)
    }
    @Get()
    findAll(){
        return this.orderservices.findAll()
    }
    @Get(':id')
    findOne(@Param('id' ,ParseIntPipe)id:number){
        return this.orderservices.findOne(id)
    }
}


