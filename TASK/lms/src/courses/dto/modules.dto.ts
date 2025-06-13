import {
  IsUUID,
  IsString,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateModuleDto {
  @IsOptional()
  @IsUUID()
  module_id?: string;

  @IsString()
  topics: string;

  @IsOptional()
  @IsString()
  content?: string; 
  @IsNumber()
  @Type(() => Number)
  created_id: number;

  @IsNumber()
  @Type(() => Number)
  course_id: number;
}
