import { Student } from "src/users/entities/student.entity";
import { teacher } from "src/users/entities/teacher.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { modulesEntity } from "./module.entities";

@Entity("courses")
export class Course {
  @PrimaryGeneratedColumn()
  course_id: number;

  @Column({ length: 100 })
  course_name: string;

  @OneToOne(()=>teacher)
  @JoinColumn({name:'created_by'})
  created_by: teacher;

  @Column({type:'text'})
  description: string;

  @CreateDateColumn()
  created_on: Date;

  @UpdateDateColumn()
  updated_on: Date;

  @Column()
  version: number;

  @Column("decimal", { precision: 10, scale: 2 })
  course_price: number;

  @Column({ nullable: true })
  course_prerequisite: string;

  @Column({ type: "timestamptz", nullable: true })
  time_remaining: Date;

  @Column()
  category: string;

  @ManyToMany(() => Student, student => student.courses)
  students: Student[]

  @OneToMany(()=>modulesEntity , modulesEntity=>modulesEntity.course)
  modules:modulesEntity[]
}
