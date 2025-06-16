import { metting } from "src/metting/entities/metting.entity";
import { Column, Entity, JoinColumn,  ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";

@Entity()
export class st_meet {
    @PrimaryColumn()
    st_meet_id: number;

    @PrimaryColumn()
    meeting_id: number;

}
