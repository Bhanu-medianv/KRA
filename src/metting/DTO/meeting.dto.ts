import { IsDate, IsInt, IsOptional, IsString, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

export class MeetingDto {
  @IsInt()
  host_id: number;

  @IsUrl()
  meeting_url: string;

  @IsDate()
  @Type(() => Date)
  start_time: Date;

  @IsDate()
  @Type(() => Date)
  end_time: Date;

  @IsInt()
  stud_id: number;

  @IsString()
  title: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  joined_at?: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  left_at?: Date;
}
