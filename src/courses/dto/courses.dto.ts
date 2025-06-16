import {
  IsUUID,
  IsString,
  IsDateString,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CourseDto {
  @IsOptional()
  @IsNumber()
  @Type(()=>Number)
  course_id?:   number;

  @IsString()
  course_name: string;

  @IsString()
  created_by: string;


  @IsString()
  description: string;

  @IsDateString()
  created_on: Date;


  @IsDateString()
  update_on: Date;

  @IsNumber()
  @Type(() => Number)
  version: number;

  @IsNumber()
  @Type(() => Number)
  course_price: number;

  @IsString()
  course_prerequisite: string;

  @IsDateString()
  time_remaining: Date;

  @IsString()
  category: string;
}