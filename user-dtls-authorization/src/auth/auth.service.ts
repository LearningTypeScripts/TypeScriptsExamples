import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsrDtlsService } from 'src/usr-dtls/usr-dtls.service';


@Injectable()
export class AuthService {
    constructor(private usrService: UsrDtlsService, private jwtService: JwtService ){}



    async validateUser(username: string, password: string): Promise<any> {
        const usr = await this.usrService.findlogin(username); 
 
        if(usr && usr.password == password){
         const {password, username, ...rest} = usr;
         //console.log(rest);
         return rest;
        }
        return null;
     }

    async login(user: any){
        const payload = {name: user.name, sub: user.id};
        console.log(payload)
        return {
            access_token: this.jwtService.sign(payload)
        };
    }

}
