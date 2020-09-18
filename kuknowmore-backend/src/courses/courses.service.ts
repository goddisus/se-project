import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourseDto } from './dto/create-course.dto';

import Course from './course.entity';
import Review from './review.entity';

//WARNING! pls use class name that same with collection in mongodb
@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course) 
        //need Repository to creat object coursesRepository
        private coursesRepository: Repository<Course>,
        @InjectRepository(Review) 
        private reviewsRepository: Repository<Review>,

    ) {}

    async findAll(): Promise<Course[]> {
        return this.coursesRepository.find();
    } 

    async create(createCourseDto: CreateCourseDto) {
        return this.coursesRepository.save(createCourseDto);
    }

    async findAllReviews(courseId: string): Promise<Review[]> {
        return this.reviewsRepository.find({where:{ courseId: courseId}});
    }
}