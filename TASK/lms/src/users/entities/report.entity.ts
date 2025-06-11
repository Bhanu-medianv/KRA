import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class report{
    @PrimaryColumn({generated:'uuid'})
    report_id:number

    @Column()
    user_id:number

    @Column()
    course_id:number

    @Column()
    issue_id:Date

    @Column()
    assign_id:number

}