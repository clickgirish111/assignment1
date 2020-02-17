import { FormGroup } from '@angular/forms';
import { EmployeeService } from './../../../services/employee/employee.service';
import { Employee } from './../../../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  showConfirmation: boolean = false;
  employees: Employee[];
  constructor(private service: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employees = this.service.getAll();

  }

  edit(formObject: any) {
    
    let id = formObject.value['employeeId'];

    this.router.navigate(['/edit/' + id], {
    });
  }

  delete(formObject: any) {
    this.showConfirmation = true;
  }

  noClicked(args: any) {
    this.showConfirmation = false;
  }

  yesClicked(formObject: FormGroup) {

    let id = formObject.value['employeeId'];
    this.service.delete(id);    
    this.router.navigate(['/employees'], {});

  }
}
