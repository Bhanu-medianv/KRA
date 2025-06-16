import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { modulesEntity } from "./module.entities";
import { REPLServer } from "repl";
import { report } from "src/users/entities/report.entity";

@Entity()
export class assiEntity {
  @PrimaryGeneratedColumn()
  assign_id: number;

  @Column({ type: "bytea" })
  response: Buffer;

  @Column({ type: "timestamptz", nullable: true })
  submission: Date;

  @Column()
  plagiarism: boolean;

  @Column("decimal", { precision: 5, scale: 2, default: 0 })
  grading: number;

  @Column({ type: "text", nullable: true })
  feedback: string;

  @Column()
  module_id: number; 

  @ManyToOne(() => modulesEntity, (module) => module.assignments)
  @JoinColumn({ name: "module_id" }) 
  module: modulesEntity;

  @Column()
  assign_description: string;

  @ManyToOne(() => report, report =>report.assignments)
  @JoinColumn({ name: "report_id" })  
  report: report;
}
