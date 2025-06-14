import { IsInt } from 'class-validator';

export class CreateTeacherDto {
  @IsInt()
  user_id: number;
}
