import { EmployeeService } from './employee.service';
export declare class EmployeeController {
    private employeeService;
    constructor(employeeService: EmployeeService);
    getAllEmployees(): any;
    getEmployeeById(id: string): any;
}
