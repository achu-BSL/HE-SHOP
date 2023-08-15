import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  Register (@Body() credential: {username: string, email: string, password: string}) {
    this.appService.register(credential.username, credential.email, credential.password);
  }

  @Post()
  login (@Body() credentials: {username: string, password: string}) {
    this.appService.login(credentials.username, credentials.password);
  }
  
}
