import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourseDto } from './dto/create-course.dto';

import Course from './course.entity';
//WARNING! pls use class name that same with collection in mongodb
@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course) 
        //need Repository to creat object coursesRepository
        private coursesRepository: Repository<Course>
    ) {}

    async findAll(): Promise<Course[]> {
        return this.coursesRepository.find();
    } 

    async create(createCourseDto: CreateCourseDto) {
        return this.coursesRepository.save(createCourseDto);
    }
}