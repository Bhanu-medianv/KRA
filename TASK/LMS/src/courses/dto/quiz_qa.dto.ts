import {
  IsOptional,
  IsNumber,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';

export class quiz_Q_A_Dto {
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    quiz_ques_id?: number;

    @IsNumber()
    @Type(() => Number)
    quiz_id: number;

    @IsNumber()
    @Type(() => Number)
    course_id: number;

    @IsBoolean()
    is_correct:boolean
     
}