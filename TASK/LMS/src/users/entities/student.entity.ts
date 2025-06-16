import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { st_meet } from "./st_meet.entity";
import { Course } from "src/courses/entity/courses.entity";
import { metting } from "src/metting/entities/metting.entity";
import { report } from "./report.entity";

@Entity()
export class Student{
    @PrimaryGeneratedColumn()
    student_id:number

    @OneToOne(()=>User ,user=>user.student)
    @JoinColumn({name:'user_id'})
    user:User

    @ManyToMany(() => Course, course => course.students)
    @JoinTable({
    name: "student_courses", 
    joinColumn: { name: "student_id", referencedColumnName: "student_id" },
    inverseJoinColumn: { name: "course_id", referencedColumnName: "course_id" }
    })
    courses: Course[];

    @ManyToMany(() => metting, meeting => meeting.students)
    @JoinTable({
    name: "student_meetings", 
    joinColumn: { name: "student_id", referencedColumnName: "student_id" },
    inverseJoinColumn: { name: "metting_id", referencedColumnName: "metting_id" }
    })
    meetings: metting[];

    @OneToOne(() => report, report => report.student)
    report: report;
}