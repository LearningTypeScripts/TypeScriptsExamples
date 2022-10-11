"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
let EmployeeService = class EmployeeService {
    constructor() {
        this.empInfo = [{ id: 111, name: 'Max', Age: 33, DOJ: '2012-01-01', dept: 'admin' },
            { id: 112, name: 'Patrick', Age: 41, DOJ: '20002-03-01', dept: 'IT' },
            { id: 113, name: 'Maggie', Age: 25, DOJ: '2020-03-01', dept: 'IT' },
            { id: 114, name: 'Rowan', Age: 42, DOJ: '2003-05-01', dept: 'admin' },
            { id: 115, name: 'Andreas', Age: 48, DOJ: '2007-03-01', dept: 'IT' },
            { id: 116, name: 'Hari', Age: 34, DOJ: '20102-03-01', dept: 'IT' }
        ];
    }
    findAll() {
        return this.empInfo;
    }
    findbyId(employeeID) {
        return this.empInfo.find(emp => emp.id == employeeID);
    }
};
EmployeeService = __decorate([
    (0, common_1.Injectable)()
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map