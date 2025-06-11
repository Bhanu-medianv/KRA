import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({generated:'uuid'})
  id: number;

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
}
