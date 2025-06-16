import { IsInt, IsString } from 'class-validator';

export class CreateGroupDto {
  @IsInt()
  group_id: number;

  @IsString()
  group_name: string;

  @IsString()
  group_admin: string;
}
