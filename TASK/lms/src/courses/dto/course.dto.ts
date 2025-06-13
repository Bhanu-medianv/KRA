import {
  IsUUID,
  IsString,
  IsDateString,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCourseDto {
  @IsOptional()
  @IsUUID()
  course_id?: string;

  @IsString()
  course_name: string;

  @IsString()
  created_by: string;

  @IsString()
  description: string;

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
