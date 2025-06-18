import { PartialType } from "@nestjs/mapped-types";
import { CreateCourseDto } from "./courses.dto";

export class UpdateCourseDto extends PartialType(CreateCourseDto){}