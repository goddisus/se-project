import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';

import Course from './courses/course.entity';
import Review from './courses/review.entity';

@Module({
  imports: [

    //for Root import to make connection of class
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test2',
      entities: [Course, Review],
      synchronize: true,
    }),
    
    CoursesModule,
    //for Feature import to sub module
    //for Repository in courses.service
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
