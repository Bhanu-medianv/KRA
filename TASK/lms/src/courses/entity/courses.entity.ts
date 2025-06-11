import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class coursesentity{
    @PrimaryColumn({generated:'uuid'})
    course_id:string

    @Column()
    course_name:string

    @Column()
    created_by:string

    @Column()
    description:string

    @Column({type:'timestamptz'})
    update_on:Date

    @Column()
    version:number

    @Column()
    course_price:number

    @Column()
    course_prerequisite:string

    @Column({type:'timestamptz'})
    time_remaining:Date

    @Column()
    category:string

}