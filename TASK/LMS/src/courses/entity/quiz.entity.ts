import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { modulesEntity } from "./module.entities";
import { report } from "src/users/entities/report.entity";
import { quizqa } from "./quiz_qa.entity";

@Entity()
export class quizEntity {
  @PrimaryGeneratedColumn()
  quiz_id: number;

  @Column()
  course_id: number;

  @Column()
  no_of_ques: number;

  @Column({ type: 'interval' })
  duration: string;

  @Column({ type: "timestamptz", nullable: true })
  started_at: Date;

  @Column({ type: "timestamptz", nullable: true })
  concluded_at: Date;

  @Column()
  marks: number;

  @Column()
  stu_id: number;

  @ManyToOne(() => modulesEntity, module => module.quizzes)
  @JoinColumn({ name: "module_id" })  
  module: modulesEntity;

  @ManyToOne(() => report, report => report.quizzes)
  @JoinColumn({ name: 'report_id' }) 
  report: report;
  
  @OneToMany(() => quizqa, quizqa => quizqa.quiz)
  quizqas: quizqa[];
}