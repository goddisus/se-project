import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import Course from './course.entity';
import Review from './review.entity';

@Module({
    imports: [
        //forFeature import for sub module
        //for Repository in courses.service
        TypeOrmModule.forFeature([Course, Review])],

    controllers: [CoursesController],
    providers: [CoursesService],
})

export class CoursesModule {}