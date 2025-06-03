import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { LocalGuard } from './guards/auth.guard';
import { JwtAuthguard } from './guards/jwtauthguard';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }
  @Post('login')
  @UseGuards(LocalGuard)
  login(@Body() authpayload:CreateAuthDto){
      const user =  this.authService.validateuser(authpayload)
      if(!user) throw new HttpException("Invalid credentials" , 404)
        console.log("post authcontroller")
        return user
  }
  @Get()
  findAll() {
    return this.authService.findAll();
  }
  @Get('status')
  @UseGuards(JwtAuthguard)

  status(@Req() req:Request){
      console.log('inside authcontroller status method')
      console.log(req.user)
      return req.user
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
