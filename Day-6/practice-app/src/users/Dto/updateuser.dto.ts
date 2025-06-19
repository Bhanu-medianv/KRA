import { CreateUserDto } from "./createuser.dto";
import {PartialType} from "@nestjs/mapped-types"
export class  UpdatedUserdto extends PartialType(CreateUserDto){}
