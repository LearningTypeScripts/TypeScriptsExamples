"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const roles_enum_1 = require("./entities/roles.enum");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                id: 111,
                name: 'XYZ',
                username: 'xyz',
                password: 'pass',
                roles: [roles_enum_1.Role.ADMIN]
            },
            {
                id: 112,
                name: 'ABC',
                username: 'abc',
                password: 'abcpass',
                roles: [roles_enum_1.Role.USER]
            },
        ];
    }
    async findOne(username) {
        return this.users.find(usr => usr.username === username);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map