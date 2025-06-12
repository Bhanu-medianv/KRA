import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Student{
    @PrimaryGeneratedColumn()
    stud_id:number

    @OneToOne(()=>User ,user=>user.student)
    @JoinColumn({name:'user_id'})
    user_id:User

    @Column()
    course_id:number

}