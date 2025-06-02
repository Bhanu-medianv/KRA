import { BadRequestException, Body, Controller, Get, Param, Post, SetMetadata, UseFilters, UseGuards } from '@nestjs/common';
import { error } from 'console';
import { OrderFilter } from './order.filter';
import { OrderGuard } from './order.guard';
import { eRole, orderDto } from './dto/orderdto';
import { OrderService } from './order.service';
import { Roles } from './order.decorator';
import e from 'express';

@Controller('order')
export class OrderController {
    constructor(private readonly orderservices :OrderService){}
    @Get()
    
    // @UseFilters(OrderFilter)
    findall():string{
        // throw new BadRequestException()
        return "here all data will be shown" 
    }
    @Post()
    @Roles(eRole.ADMIN)
    @UseGuards(OrderGuard)
    create(@Body() orderdto:orderDto){
        return  this.orderservices.create(orderdto)
    }
}
