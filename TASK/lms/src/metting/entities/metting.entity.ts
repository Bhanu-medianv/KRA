import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class metting{
    @PrimaryColumn({generated:'uuid'})
    metting_id:number

    @Column()
    host_id:number

    @Column()
    meeting_url:string

    @Column('timestamptz')
    start_time:Date

    @Column({type:'timestamptz'})
    end_time:Date

    @Column()
    user_id:number

    @Column()
    title:string

    @Column('timestamptz')
    joined_at:Date

}