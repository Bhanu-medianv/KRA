import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class group{
   @PrimaryGeneratedColumn()
    group_id:number
    
    @Column()
    user_id:number

    @Column()
    group_name:string

    @Column()
    group_admin:string

    @OneToMany(()=>User , user=>user.group)
    user:User[]

}