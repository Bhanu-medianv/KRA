import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class qbank{
   @PrimaryColumn({generated:'uuid'})
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