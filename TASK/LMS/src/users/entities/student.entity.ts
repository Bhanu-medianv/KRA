import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { st_meet } from "./st_meet.entity";

@Entity()
export class Student{
    @PrimaryGeneratedColumn()
    student_id:number

    @OneToOne(()=>User ,user=>user.student)
    @JoinColumn({name:'user_id'})
    user_id:User

    @Column()
    course_id:number

    @OneToMany(() => st_meet, stMeet => stMeet.student)
    meetings: st_meet[];
}