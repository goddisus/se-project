import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get()
  findAll(): any {
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
      }
    ];
  }
}
