import {
  IsUUID,
  IsString,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ModuleDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  module_id?: number;

  @IsString()
  topics: string;

  @IsOptional()
  @IsString()
  content?: string; 
  

  @IsNumber()
  @Type(() => Number)
  course_id: number;
}