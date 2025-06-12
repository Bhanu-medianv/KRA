import { LargeNumberLike } from "crypto";
import { interval } from "rxjs";
import { TimeInterval } from "rxjs/internal/operators/timeInterval";
import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class quizEntity{
   @PrimaryGeneratedColumn()
    quiz_id:number


    @Column()
    course_id:number

    @Column()
    no_of_ques :number

    @Column({type:'interval'})
    duration:string

    @Column({ type: "timestamptz", nullable: true })
    started_at:Date
    
    @Column({ type: "timestamptz", nullable: true })
    concluded_at:Date

    @Column()
    marks:number

    @Column()
    stu_id:number

    @Column()
    module_id:number
}