import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import Course from './entities/course.entity';

@Module({
  imports: [

    //for Root import to make connection of class
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test2',
      entities: [Course],
      synchronize: true,
    }),

    //for Feature import to sub module
    //for Repository in courses.service
    TypeOrmModule.forFeature([Course]),
  ],
  controllers: [AppController, CoursesController],
  providers: [AppService, CoursesService],
})
export class AppModule {}
