import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthenticationGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Role } from './users/entities/roles.enum';
import { Roles } from './users/role.decorator';
import { RolesGuard } from './users/roles.guard';



@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }


  @UseGuards(LocalAuthGuard)
  @Post('login')
 async login(@Request() req) {
    return this.authService.login(req.user);
    //return "Login Successful for userId  "+ req.user.id +" name "+ req.user.name;
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get('hello')
  getHello(@Request() req): string {
    return req.user;
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  @Get('admin')
  getAdminAuth(@Request() req) {
    return req.user;
  }

  @Roles(Role.GUEST)
  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  @Get('user')
  getUserAuth(@Request() req){
    return req.user;
  }

}
