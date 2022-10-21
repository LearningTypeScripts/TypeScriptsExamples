import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticateGaurd } from './auth/authenticated.gaurd';
import { LocalAuthGuard } from './auth/local-auth.guard';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
  return {msg : "Logged in Successful !!"}; 
  }

  @UseGuards(AuthenticateGaurd)
  @Get('hello')
  getHello(@Request() req): string {
    return req.user;
  }
}
