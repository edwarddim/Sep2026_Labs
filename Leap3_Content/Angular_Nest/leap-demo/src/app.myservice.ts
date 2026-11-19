import { Injectable } from '@nestjs/common';

@Injectable()
export class MyService {
  getHello(): string {
    return 'Hello World! --- :)';
  }
}