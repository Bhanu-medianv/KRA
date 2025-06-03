import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
const demousers = [
  {id:1,
    username:"bhanu",
    password:"asdf"
  },
  {id:2,
    username:"bhanup",
    password:"asdfg"
  }
]

@Injectable()
export class AuthService {
  constructor(private jwtservices:JwtService){}
  validateuser({username , password}:CreateAuthDto){
    
    const finduser = demousers.find((user)=>user.username ===username)
    if(!finduser)return null
    if(password===finduser.password){
      const {password,...user} = finduser
      return this.jwtservices.sign(user)
    }
    console.log("this is servicces")
  }
  create(cauthdto:CreateAuthDto){
    return "This return the post data"
  }
  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
  
}
