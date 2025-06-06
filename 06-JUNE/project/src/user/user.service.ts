import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { person } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(person)
        private userRepository:Repository<person>){}
    async findAll():Promise<person[]>{
        return await this.userRepository.find()
    }
    async findOne(id:number):Promise<person |null>{
        return await this.userRepository.findOneBy({id :id})
    }
    async create(user:person):Promise<person>{

        return await this.userRepository.save(user)
    }
    async update(id:number , user:Partial<person>):Promise<person | null>{
        const updated = await this.userRepository.preload({id , ...user})
        if(!updated) return null
        return await this.userRepository.save(updated)
        
    }
    async delete(id:number):Promise<person |null>{
        const usertodelete = await this.userRepository.findOneBy({id})
        if(!usertodelete) return null
        await this.userRepository.remove(usertodelete)
        return usertodelete

    }

}
