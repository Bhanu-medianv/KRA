import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './DTO/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userServices:UsersService){}
    @Get()
    findAllusers(){
        return this.userServices.findAllusers()
    }
    @Get(':id')
    findOneuser(@Param('id' ,ParseIntPipe)id:number){
        return this.userServices.findOneuser(id)
    }
    @Post()
    createuser(@Body(new ValidationPipe()) createUserDto:CreateUserDto){
        return this.userServices.createuser(createUserDto) 
    }
    @Get()
    findAll(){
        return this.userServices.findAllusers()
    }

    
}
