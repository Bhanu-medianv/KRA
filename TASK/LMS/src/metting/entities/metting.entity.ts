import { teacher } from "src/users/entities/teacher.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { recording } from "./recording.entity";
import { st_meet } from "src/users/entities/st_meet.entity";


@Entity()
export class metting{
   @PrimaryGeneratedColumn()
    metting_id:number

    @Column()
    host_id:number

    @Column()
    meeting_url:string

    @Column({type:'timestamptz'})
    start_time:Date

    @Column({type:'timestamptz'})
    end_time:Date

    @Column()
    stud_id:number

    @Column()
    title:string

    @Column({ type: "timestamptz", nullable: true })
    joined_at:Date

     @Column({ type: "timestamptz", nullable: true })
    left_at:Date
    
    @ManyToOne(()=>teacher , teacher=>teacher.metting)
    @JoinColumn({name:'host_id'})
    teacher:teacher

    @OneToOne(()=>recording  , recording=>recording.metting)
    recording:recording

    @OneToMany(()=>st_meet, st_meet=>st_meet.meeting)
    st_meet:st_meet[]
}