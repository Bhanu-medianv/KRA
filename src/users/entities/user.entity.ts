import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from 'typeorm';
import { teacher } from './teacher.entity';
import { Student } from './student.entity';
import { group } from './groups.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age:number

  @Column()
  email:string

  @Column()
  hashed_password:string

  @Column({type:'timestamptz'})
  last_login:Date

  @Column()
  role:string

  @Column({ default: true })
  isActive: boolean;

  @Column({type:'timestamptz'})
  updated_at:Date

  @OneToOne(()=>teacher , teacher=>teacher.user_id)
  teacher:teacher

  @OneToOne(()=>Student,Student=>Student.user_id)
  student:Student

  @ManyToOne(()=>group , group=>group.user)
  group:group
}
