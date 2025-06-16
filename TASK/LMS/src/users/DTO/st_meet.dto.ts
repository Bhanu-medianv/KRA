import { IsInt } from 'class-validator';

export class CreateStMeetDto {
  @IsInt()
  meeting_id: number;

  @IsInt()
  student_id: number;
}
