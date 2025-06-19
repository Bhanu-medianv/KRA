import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdatedUserdto } from './Dto/updateuser.dto';
import { CreateUserDto } from './Dto/createuser.dto';
import { Dontseeme } from './forbiden.exception';

@Controller('users')
export class UsersController {
    constructor(private readonly userservices:UsersService){}
    @Get()
    findAll(@Query('role')role?:CreateUserDto['role']){
       
        return this.userservices.findAll(role)
    }
    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id:number){
        return this.userservices.findOne(id) 
    }
    @Post()
    create(@Body(ValidationPipe) createuserdto:CreateUserDto){
        
        return this.userservices.create(createuserdto)
    }
    @Patch(':id')
    update(@Param('id' ,ParseIntPipe) id:number , @Body(ValidationPipe) updateuserdto:UpdatedUserdto ){
        return this.userservices.update(id, updateuserdto )
    }
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id:number){
        return this.userservices.delete(id)
    }
    
   
}
