import {
  IsString,
  IsOptional,
  IsNumber,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';

enum Questype{
    MCQ = 'MCQ',
    Short_ques_ans = 'Short_ques_ans',
    Long_ques_ans = 'Long_ques_ans',
    true_false = 'true_false',
}

export class quesbankDto {
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    ques_id?: string;

    @IsString()
    question: string;

    @IsString()
    answer: string;

    @IsNumber()
    @Type(() => Number)
    course_id: number;

    @IsNumber()
    @Type(() => Number)
    module_id: number;
     
    @IsEnum(Questype)
    ques_type:Questype
}