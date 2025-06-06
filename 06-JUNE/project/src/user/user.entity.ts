import { IsNumber, IsOptional, IsString, MinLength, minLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('dbperson')

export class person{
    @PrimaryGeneratedColumn()
    @IsNumber()
    @IsOptional()
    id:number;
    @Column()
    @IsString()
    fname:String;
    @Column()
    @IsString()
    city:String;
    @Column()
    @IsNumber()
    age:number;
    @Column({default:'1234567890'})
    @IsString()
    @MinLength(10)

    mob:string;
}
