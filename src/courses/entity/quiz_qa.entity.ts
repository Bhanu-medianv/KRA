import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class quizqa{
    @PrimaryGeneratedColumn()
    quiz_ques_id:number
    
    @Column()
    quiz_id:number

    @Column()
    ques_id:number

    @Column()
    response:string

    @Column()
    is_correct:boolean
}