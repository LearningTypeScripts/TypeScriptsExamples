import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usrService;
    private jwtService;
    constructor(usrService: UsersService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
