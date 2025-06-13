import {
  IsUUID,
  IsBoolean,
  IsDateString,
  IsNumber,
  IsString,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAssiDto {
  @IsOptional()
  @IsUUID()
  assign_id?: string;

  @IsString()
  response: string; 
  
  @IsDateString()
  submission: Date;

  @IsBoolean()
  plagiarism: boolean;

  @IsNumber()
  @Type(() => Number)
  grading: number;

  @IsString()
  feedback: string;

  @IsNumber()
  @Type(() => Number)
  module_id: number;

  @IsString()
  assign_description: string;
}
