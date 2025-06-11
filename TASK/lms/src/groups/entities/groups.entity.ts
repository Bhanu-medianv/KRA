import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class group{
    @PrimaryColumn({generated:'uuid'})
    group_id:number

    @Column()
    user_id:number

    @Column()
    group_name:string

    @Column()
    group_admin:string
}