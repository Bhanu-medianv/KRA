import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { teacher } from './entities/teacher.entity';
import { Student } from './entities/student.entity';
import { st_meet } from './entities/st_meet.entity';
import { report } from './entities/report.entity';
import { group } from './entities/groups.entity';
import { CreateUserDto } from './DTO/user.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
            private userRepository:Repository<User>,
        @InjectRepository(teacher)
            private teacherRepository:Repository<teacher>,
        @InjectRepository(Student)
            private studentRepository:Repository<Student>,
        @InjectRepository(st_meet)
            private st_meetRepository:Repository<st_meet>,
        @InjectRepository(report)
            private reportRepository:Repository<report>,
        @InjectRepository(group)
            private groupRepository:Repository<group>
    ){}
    async findAllusers(){
        return await this.userRepository.find()
    }
    async findOneuser(id:number){
        return await this.userRepository.findOneBy({user_id:id})
    }
    async createuser(createUserDto:CreateUserDto):Promise<User>{
        const new_user = this.userRepository.create(createUserDto)
        return await this.userRepository.save(new_user)
    }
    
}
