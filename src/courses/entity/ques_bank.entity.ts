import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class qbank{
   @PrimaryGeneratedColumn()
    ques_id:number

    @Column()
    question:string

    @Column()
    answer:string

    @Column()
    course_id:number

    @Column()
    module_id:number

    @Column()
    ques_type:string
}