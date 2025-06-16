import { Column, Entity,JoinColumn,ManyToOne,OneToMany,OneToOne,PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./courses.entity";
import { qbank } from "./ques_bank.entity";
import { assiEntity } from "./assi.entity";
import { quizEntity } from "./quiz.entity";

@Entity()
export class modulesEntity {
  @PrimaryGeneratedColumn()
  module_id: number;

  @Column()
  topics: string;

  @Column("bytea", { nullable: true })
  content: Buffer;

  @ManyToOne(() => Course, course => course.modules)
  @JoinColumn({ name: "course_id" })
  course: Course;

  @OneToOne(() => qbank, q => q.module)
  qbank: qbank;

  @OneToMany(() => assiEntity, assi => assi.module)
  assignments: assiEntity[];

  @OneToMany(() => quizEntity, quiz => quiz.module)
    quizzes: quizEntity[];
}