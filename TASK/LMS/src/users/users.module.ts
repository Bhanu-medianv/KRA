import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DataSource } from 'typeorm';
import { teacher } from './entities/teacher.entity';
import { st_meet } from './entities/st_meet.entity';
import { Student } from './entities/student.entity';
import { report } from './entities/report.entity';
import { group } from './entities/groups.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,teacher,st_meet,Student,report,group])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {
  constructor(public dataSource:DataSource){}
}
