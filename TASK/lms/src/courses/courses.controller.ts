import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    @Get()
    find():string{
        return 'this is the string'
    }
}
