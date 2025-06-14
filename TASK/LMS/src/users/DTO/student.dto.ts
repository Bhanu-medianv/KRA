import { IsInt } from 'class-validator';

export class CreateStudentDto {
  @IsInt()
  user_id: number;

  @IsInt()
  course_id: number;
}
