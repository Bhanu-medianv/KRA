import {
  IsInt,
  IsString,
  IsOptional,
  IsDate,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class QuizDto {
  @IsInt()
  course_id: number;

  @IsInt()
  no_of_ques: number;

  @IsString()
  duration: string; 

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  started_at?: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  concluded_at?: Date;

  @IsNumber()
  marks: number;

  @IsInt()
  stu_id: number;

  @IsInt()
  module_id: number;
}
