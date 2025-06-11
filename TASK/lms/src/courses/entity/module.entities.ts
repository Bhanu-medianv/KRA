import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class modulesEntity{
   @PrimaryColumn({generated:'uuid'})
    module_id:number

    @Column()
    topics:string

    @Column('bytea',{nullable:true})
    content:Buffer;

    @Column()
    created_id:number

    @Column()
    course_id:number




}