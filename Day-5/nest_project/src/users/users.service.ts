import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
    private users =[
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "leanne.graham@example.com",
    "role": "ADMIN"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "email": "ervin.howell@example.net",
    "role": "ENGINEER"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "email": "clementine.bauch@example.org",
    "role": "INTERN"
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "email": "patricia.lebsack@kory.org",
    "role": "ENGINEER"
  },
  {
    "id": 5,
    "name": "Nicholas Runolfsdottir",
    "email": "nicholas.runolf@example.io",
    "role": "INTERN"
  }
]
findAll(role?:'INTERN' |'ENGINEER' |'ADMIN'){
    if(role){
        return this.users.filter((user)=>user.role ===role)
    }
    return this.users
}


findOne(id:number){
    const user = this.users.find((user)=>user.id ===id)
    return user
}
create(createuserdto:CreateUserDto){
    const userByHighestId  = [...this.users].sort((a,b)=>b.id - a.id)
    const newUser = {id:userByHighestId[0].id +1 , ...createuserdto}
    this.users.push(newUser)
    return newUser
}
update(id:number , userupdate:{name?:string , email?:string , role?:'INTERN' |'ENGINEER' |'ADMIN'}){
    this.users = this.users.map(user=>{
        if(user.id ===id){
            return {...user , ...userupdate}
        }
        return user
    })
    return this.findOne(id)
}
delete(id:number){
    const removeUser = this.findOne(id)
    this.users = this.users.filter(user=>user.id !==id)
    return this.users
}
}
