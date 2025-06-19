import { Get, Injectable, Param } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
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
    findAll(role?:"INTERN"|"ADMIN"|"ENGINEER"){
        if(role){
            return this.users.filter(user =>user.role === role)
        }
        return this.users
    }
    findOne(id:number){
        const user = this.users.find((user)=>user.id===id)
        return user 
    }
    create(user:{name:string , email:string , role:"INTERN"|"ADMIN"|"ENGINEER"}){
        const uid = [...this.users].sort((a , b)=>b.id - a.id)
        const new_user = { id:uid[0].id + 1 , ...user}
        this.users.push(new_user)
        return new_user
    }
    update(id:number,user:{name?:string , email?:string , role?:"INTERN"|"ADMIN"|"ENGINEER"}){
        this.users = this.users.map((pers)=>{
            if(pers.id ===id){
                return {...pers ,...user}
            }
            return pers
        })
        return this.findOne(id)
    }
    delete(id:number){
        this.users= this.users.filter(peop=>peop.id !==id)
        return this.users

    }
}
