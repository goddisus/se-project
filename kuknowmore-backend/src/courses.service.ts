import { Injectable } from '@nestjs/common'
import { Courses } from './interfaces/courses.interface';

@Injectable()
export class CoursesService {
    async findAll(): Promise<Courses[]>{
        return [
            { 
                id: '100',
                number: '01204111',
                title: 'Computer and Programming'
            },
            {
                id: '213fds',
                number: '01204211',
                title: 'Discrete math'
            },
            {
                id: 'egjeowjgwepog',
                number: '01204313',
                title: 'Design and analysis of algo'
            },
        ];
    } 
}