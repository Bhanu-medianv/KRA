import { IsDate, IsInt,  IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRecordingDto {
  @IsInt()
  meeting_id: number;

  @IsUrl()
  file_url: string;

  @IsDate()
  @Type(() => Date)
  created_at: Date;
}
