import { Employee } from './../../models/employee.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[];

  constructor() {
    this.employees = [
      { id: 1, name: 'John', age: 34, phone: "+1.123.4567.121" },
      { id: 2, name: 'Jane', age: 35, phone: "+1.123.4567.122" },
      { id: 3, name: 'Jack', age: 36, phone: "+1.123.4567.123" },
      { id: 4, name: 'Jason', age: 37, phone: "+1.123.4567.124" },
    ];
  }

  getAll(): Employee[] {
    return this.employees;
  }

  get(id: number): Employee {
    let index = this.employees.findIndex(x => x.id === id);
    if (index > -1) {
      return this.employees[index];
    }
    else {
      return null;
    }
  }

  post(data: Employee): Employee {
    data.id = this.employees.length + 1;
    this.employees.push(data);

    return data;
  }

  put(data: Employee): Employee {
    
    let index = this.employees.findIndex(x => x.id === data.id);
    this.employees.splice(index, 1);
    this.employees.splice(index, 0, data);

    return data;
  }

  delete(id: number) {
    let index = this.employees.findIndex(x => x.id === id);
    this.employees.splice(index, 1);
  }
}
