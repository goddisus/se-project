import { Controller, Get } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Courses } from './interfaces/courses.interface';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async findAll(): Promise<Courses[]> {
    return this.coursesService.findAll();
  }
}
