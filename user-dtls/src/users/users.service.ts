import { Injectable } from '@nestjs/common';

export type User = {
    id:number;
    name:string;
    username:string;
    password:string;
}
@Injectable()
export class UsersService {
     private readonly usrInfo: User[] = [
        {
         id: 111,
         name: 'XYZ',
         username:'xyz',
         password:'pass',
        },{
            id: 112,
            name: 'ABC',
            username:'abc',
            password:'abcpass',
        }];
     async findOne(username: string): Promise<User | undefined> {
        return this.usrInfo.find(usr => usr.username === username);
     }
}
