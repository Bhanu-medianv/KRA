    import { Injectable } from '@nestjs/common';
    import { orderDto } from './dto/orderdto';

    @Injectable()
    export class OrderService {
        private users = [
            {"name":"asdf",
                "id":1,
                "role":"INTERN"
            },
            {"name":"asdf",
                "id":2,
                "role":"ADMIN"
            }
        ]
        create(user:orderDto):orderDto{
            
            const new_user = {...user}
            this.users.push(new_user)
            return new_user
        }
        getUserById(id:number){
            return this.users.find(user=>user.id ===id)
        }
    }
