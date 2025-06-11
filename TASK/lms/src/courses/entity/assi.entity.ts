import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class assiEntity{
    @PrimaryColumn({generated:'uuid'})
    assign_id:number

    @Column({type:"bytea"})
    response:Buffer

    @Column('timestamptz')
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