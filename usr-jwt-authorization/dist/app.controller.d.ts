import { AuthService } from './auth/auth.service';
export declare class AppController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getHello(req: any): string;
    getAdminAuth(req: any): any;
    getUserAuth(req: any): any;
}
