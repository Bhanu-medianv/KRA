import { metting } from "src/metting/entities/metting.entity";
import { Column, Entity, JoinColumn,  ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class st_meet{
    @PrimaryGeneratedColumn()
    st_meet_id:number

    @Column()
    meeting_id:number

    @Column()
    student_id:number

    @ManyToOne(()=>metting , metting=>metting.st_meet)
    metting:metting
}