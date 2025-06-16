import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";
import { assiEntity } from "src/courses/entity/assi.entity";
import { quizEntity } from "src/courses/entity/quiz.entity";

@Entity()
export class report{
    @PrimaryGeneratedColumn()
    report_id:number

    @OneToOne(() => Student, student => student.report)
    @JoinColumn({ name: 'student_id' }) 
    student: Student

    @Column()
    course_id:number

    @Column({ type: "timestamptz", nullable: true })
    issue_id:Date

    @Column()
    assign_id:number

    @Column()
    quiz_id:number
    
    @OneToMany(() => assiEntity, assi => assi.report)
    assignments: assiEntity[];

    @OneToMany(() => quizEntity, quiz => quiz.report)
    quizzes: quizEntity[];
}