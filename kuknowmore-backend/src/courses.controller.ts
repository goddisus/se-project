import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class AppController {

  @Get()
  getHello(): string {
    return 'Hello';
  }
}
