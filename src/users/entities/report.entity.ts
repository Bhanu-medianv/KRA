import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class report{
   @PrimaryGeneratedColumn()
    report_id:number

    @Column()
    stud_id:number

    @Column()
    course_id:number

    @Column({ type: "timestamptz", nullable: true })
    issue_id:Date

    @Column()
    assign_id:number

    @Column()
    quiz_id:number
}