import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { quizEntity } from "./quiz.entity";
import { qbank } from "./ques_bank.entity";

@Entity()
export class quizqa{
    @PrimaryGeneratedColumn()
    quiz_ques_id:number
    

    @Column()
    response:string

    @Column()
    is_correct:boolean


   @ManyToOne(() => quizEntity, quiz => quiz.quizqas)
  @JoinColumn({ name: 'quiz_id' }) 
  quiz: quizEntity;

  @ManyToOne(() => qbank, qbank => qbank.quizqas)
    @JoinColumn({ name: 'ques_id' })
    question: qbank;
}