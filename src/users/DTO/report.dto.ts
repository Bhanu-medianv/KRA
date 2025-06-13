import { IsDate, IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReportDto {
  @IsInt()
  stud_id: number;

  @IsInt()
  course_id: number;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  issue_id?: Date;

  @IsInt()
  assign_id: number;

  @IsInt()
  quiz_id: number;
}
