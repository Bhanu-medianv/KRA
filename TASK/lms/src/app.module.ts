import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { CoursesModule } from './courses/courses.module';
import { coursesentity } from './courses/entity/courses.entity';
import { modulesEntity } from './courses/entity/module.entities';
import { assiEntity } from './courses/entity/assi.entity';
import { QuizModule } from './quiz/quiz.module';
import { quizEntity } from './quiz/entity/quiz.entity';
import { qbank } from './courses/entity/ques_bank.entity';
import { quizqa } from './quiz/entity/quiz_qa.entity';
import { report } from './users/entities/report.entity';
import { MettingModule } from './metting/metting.module';
import { metting } from './metting/entities/metting.entity';
import { GroupsModule } from './groups/groups.module';
import { group } from './groups/entities/groups.entity';
import { recording } from './metting/entities/recording.entity';

@Module({
  imports: [UsersModule,TypeOrmModule.forRoot({ 
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'lms',
      entities: [User,coursesentity,modulesEntity,assiEntity,quizEntity,qbank,quizqa,report,metting,group,recording],
      synchronize:true
  }), CoursesModule, QuizModule, MettingModule, GroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
