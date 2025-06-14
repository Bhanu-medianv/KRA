import { teacher } from "src/users/entities/teacher.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

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
}
