import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";


@Injectable()
export class AuthenticateGaurd implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        //console.log(request);
        console.log(request.isAuthenticated());
        console.log(request.isUnauthenticated());
        return request.isAuthenticated();
    }

}