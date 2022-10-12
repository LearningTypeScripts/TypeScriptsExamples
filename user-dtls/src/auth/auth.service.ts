import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {
    constructor(private usrService: UsersService){}

    async validateUser(username: string, password: string): Promise<any> {
       const usr = await this.usrService.findOne(username); 

       if(usr && usr.password == password){
        const {password, username, ...rest} = usr;
        //console.log(rest);
        return rest;
       }
       return null;
    }
}
