import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "./entities/role.enum";
import { UsrDtl } from "./entities/usr-dtl.entity";

export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        
        // const requireRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
        //     context.getHandler(),
        //     context.getClass(),
        // ]);
        
        // if(!requireRoles){
        //     return true;
        // }

    //return requireRoles.some((role) => user.roles.includes(role));
        return true;
    }
}