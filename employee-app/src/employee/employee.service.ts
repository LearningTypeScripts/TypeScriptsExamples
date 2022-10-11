import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    private empInfo: any = [{id: 111, name: 'Max', Age: 33, DOJ: '2012-01-01', dept:'admin'}, 
                        {id: 112, name: 'Patrick', Age: 41, DOJ: '20002-03-01', dept:'IT'},
                        {id: 113, name: 'Maggie', Age: 25, DOJ: '2020-03-01', dept:'IT'},
                        {id: 114, name: 'Rowan', Age: 42, DOJ: '2003-05-01', dept:'admin'},
                        {id: 115, name: 'Andreas', Age: 48, DOJ: '2007-03-01', dept:'IT'},
                        {id: 116, name: 'Hari', Age: 34, DOJ: '20102-03-01', dept:'IT'}
                        ]
    findAll(){
        return this.empInfo;
    }

    findbyId(employeeID: string){
        return this.empInfo.find(emp => emp.id == employeeID);
    }
}
