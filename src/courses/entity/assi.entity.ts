import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class assiEntity{
   @PrimaryGeneratedColumn()
    assign_id:number

    @Column({type:"bytea"})
    response:Buffer

    @Column({ type: "timestamptz", nullable: true })
    submission:Date

    @Column()
    plagiarism:boolean

    @Column('decimal')
    grading:number

    @Column()
    feedback:string

    @Column()
    module_id:number

    @Column()
    assign_description:string
}