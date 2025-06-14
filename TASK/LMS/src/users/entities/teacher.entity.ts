import { Course } from "src/courses/entity/courses.entity";
import {  Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { metting } from "src/metting/entities/metting.entity";

@Entity()
export class teacher{
    @PrimaryGeneratedColumn()
    teacher_id:number
    
    @OneToOne(()=>User , user=>user.teacher )
    @JoinColumn({name:"user_id"})
    user_id:User

    @OneToOne(()=>Course ,course=>course.created_by)
    course:Course

    @OneToMany(()=>metting , metting=>metting.teacher)
    metting:metting[]

}