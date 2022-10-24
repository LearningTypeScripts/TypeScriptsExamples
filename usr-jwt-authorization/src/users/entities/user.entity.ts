import { Role } from "./roles.enum";

export interface User {
    id:number;
    name:string;
    username:string;
    password:string;
    roles: Role[];
    // name: string;
    //roles: string[];
}