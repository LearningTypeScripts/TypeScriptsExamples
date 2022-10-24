import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {
    constructor(private usrService: UsersService, private jwtService: JwtService ){}

    async validateUser(username: string, password: string): Promise<any> {
       const usr = await this.usrService.findOne(username); 

       if(usr && usr.password == password){
        const {password, username, ...rest} = usr;
        //console.log(rest);
        return rest;
       }
       return null;
    }

     async login(user: any){
        const payload = {
            name: user.name,
            sub: user.id,
            roles: user.roles,
          };
          return {
            access_token: this.jwtService.sign(payload),
          };
    }

}
