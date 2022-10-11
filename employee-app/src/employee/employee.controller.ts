import { Controller, Param, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {

    constructor(private employeeService: EmployeeService){}

    @Get()
    getAllEmployees():any {
        return this.employeeService.findAll();
    }

    @Get(':id')
    getEmployeeById(@Param('id') id: string): any{
       return this.employeeService.findbyId(id); 
    }
}
