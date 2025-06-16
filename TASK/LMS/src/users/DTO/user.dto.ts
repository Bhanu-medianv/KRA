import { IsBoolean, IsDate, IsInt, IsOptional, IsString, IsEmail, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';


enum UserRole {
  Student ='student',
  Teacher = 'teacher'
}
export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsInt()
  age: number;

  @IsEmail()
  email: string;

  @IsString()
  hashed_password: string;

  @IsDate()
  @Type(() => Date)
  last_login: Date;

  @IsEnum(UserRole)
  @IsString()
  role: UserRole;

  @IsBoolean()
  isActive: boolean;

  @IsDate()
  @Type(() => Date)
  updated_at: Date;
}
