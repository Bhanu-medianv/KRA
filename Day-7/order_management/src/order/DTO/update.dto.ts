import { OrderDto } from "./order.dto";
import {PartialType} from "@nestjs/mapped-types"
export class UpdateUserDto extends PartialType(OrderDto){}