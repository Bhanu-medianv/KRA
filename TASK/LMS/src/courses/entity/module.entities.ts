import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class modulesEntity{
   @PrimaryGeneratedColumn()
    module_id:number

    @Column()
    topics:string

    @Column('bytea',{nullable:true})
    content:Buffer;

    @Column()
    course_id:number
    

}