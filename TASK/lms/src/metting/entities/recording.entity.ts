import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class recording{
    @PrimaryColumn({generated:'uuid'})
    record_id:number

    @Column()
    meeting_id:number

    @Column()
    file_url:string

    @Column({type:'timestamptz'})
    created_at:Date
}