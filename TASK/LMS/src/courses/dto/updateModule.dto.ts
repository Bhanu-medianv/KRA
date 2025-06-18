import { PartialType } from "@nestjs/mapped-types";
import { ModuleDto } from "./modules.dto";

export class UpdateModuleDto extends PartialType(ModuleDto){}