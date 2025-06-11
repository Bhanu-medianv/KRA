import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class quizqa{
    @PrimaryColumn({generated:'uuid'})
    quiz_id:number
    
    @Column()
    user_id:number

    @Column()
    qbank_id:number

    @Column()
    response:string

    @Column()
    is_correct:boolean
}