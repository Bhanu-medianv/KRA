import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { metting } from "./metting.entity";

@Entity()
export class recording{
   @PrimaryGeneratedColumn()
    record_id:number

    @Column()
    meeting_id:number

    @Column()
    file_url:string

    @Column({type:'timestamptz'})
    created_at:Date

    @OneToOne(()=>metting ,metting=>metting.recording)
    @JoinColumn({name:'metting_id'})
    metting:metting
}