import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { CoursesModule } from './courses/courses.module';
import { modulesEntity } from './courses/entity/module.entities';
import { assiEntity } from './courses/entity/assi.entity';
import { quizEntity } from './courses/entity/quiz.entity';
import { qbank } from './courses/entity/ques_bank.entity';
import { quizqa } from './courses/entity/quiz_qa.entity';
import { report } from './users/entities/report.entity';
import { MettingModule } from './metting/metting.module';
import { metting } from './metting/entities/metting.entity';
import { group } from './users/entities/groups.entity';
import { recording } from './metting/entities/recording.entity';
import { teacher } from './users/entities/teacher.entity';
import { Student } from './users/entities/student.entity';
import { st_meet } from './users/entities/st_meet.entity';
import { Course } from './courses/entity/courses.entity';

@Module({
  imports: [UsersModule,TypeOrmModule.forRoot({ 
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'lms',
      entities: [User,Course,modulesEntity,assiEntity,quizEntity,qbank,quizqa,report,metting,group,recording,teacher,Student,st_meet],
      synchronize:true
  }), CoursesModule, MettingModule,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
