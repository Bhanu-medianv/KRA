import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { person } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userservices:UserService){}
    @Get()
    findAll(){
        return this.userservices.findAll()
    }
    @Get(':id')
    findOne(@Param('id',ParseIntPipe)id:number){
        return this.userservices.findOne(id)
    }
    @Post()
    create(@Body(ValidationPipe) user:person){
            return this.userservices.create(user)
    }
    @Patch(':id')
    update(@Param('id' , ParseIntPipe) id:number , @Body() user:person){
        return this.userservices.update(id,user)
    }
    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id:number ){
        return this.userservices.delete(id)
    }
}
