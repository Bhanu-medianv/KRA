import { metting } from "src/metting/entities/metting.entity";
import { Column, Entity, JoinColumn,  ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";

@Entity()
export class st_meet {
    @PrimaryColumn()
    st_meet_id: number;

    @PrimaryColumn()
    meeting_id: number;

    @ManyToOne(() => Student, student => student.meetings)
    @JoinColumn({ name: 'student_id' })
    student: Student;

    @ManyToOne(() => metting, meeting => meeting.st_meet)
    @JoinColumn({ name: 'meeting_id' })
    meeting: metting;
}
