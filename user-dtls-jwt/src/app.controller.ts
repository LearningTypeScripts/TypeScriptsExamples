import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service'; 
import { JwtAuthenticationGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';



@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }


  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
    //return "Login Successful for userId  "+ req.user.id +" name "+ req.user.name;
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get('hello')
  getHello(@Request() req): string {
    return req.user;
  } 
}
