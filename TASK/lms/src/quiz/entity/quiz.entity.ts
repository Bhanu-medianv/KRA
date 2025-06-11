import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class quizEntity{
   @PrimaryColumn({generated:'uuid'})
    quiz_id:number

     @Column()
    user_id:number

    @Column()
    course_id:number

    @Column()
    no_of_ques :number

    @Column()
    duration:number

    @Column('timestamptz')
    started_at:Date
    
    @Column('timestamptz')
    concluded_at:Date

    @Column()
    marks:number
}