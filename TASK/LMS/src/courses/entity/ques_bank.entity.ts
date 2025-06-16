import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { modulesEntity } from "./module.entities";
import { quizqa } from "./quiz_qa.entity";

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

    
    @OneToOne(() => modulesEntity, module => module.qbank)
    @JoinColumn({ name: 'module_id' })  
    module: modulesEntity;

    @Column()
    ques_type:string

    @OneToMany(() => quizqa, quizqa => quizqa.question)
    quizqas: quizqa[];
}