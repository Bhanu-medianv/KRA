import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {
    constructor(private readonly userServices:UsersService){}
    @Get()
    findAll(@Query('role')role?:CreateUserDto["role"]){
        return this.userServices.findAll(role)
    }
    @Get(':id')
    findOne(@Param('id' , ParseIntPipe)id:number){
        return this.userServices.findOne(id)
    }
    @Post()
    create(@Body() createuserdto:CreateUserDto){
        return this.userServices.create(createuserdto)
    }
    @Patch(':id' )
    update(@Param('id', ParseIntPipe)id:number ,@Body()userupdate:{name?:string , email?:string , role?:'INTERN' |'ENGINEER' |'ADMIN'}){
        return this.userServices.update(id , userupdate)
    }
    @Delete(':id' )
    delete(@Param('id',ParseIntPipe)id:number){
        return this.userServices.delete(id)
    }
}
