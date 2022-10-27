import { Injectable } from '@nestjs/common';
import { Role } from './entities/roles.enum';
import { User } from './entities/user.entity'


@Injectable()
export class UsersService {
     private readonly users = [
        {
         id: 111,
         name: 'XYZ',
         username:'xyz',
         password:'pass',
         roles: [Role.ADMIN]
        },
        {
            id: 112,
            name: 'ABC',
            username:'abc',
            password:'abcpass',
            roles: [Role.GUEST]
        },
     ];

     async findOne(username: string): Promise<User | undefined> {
        return this.users.find(usr => usr.username === username);
     }
}

