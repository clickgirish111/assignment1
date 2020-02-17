import { EmployeeService } from './../../../services/employee/employee.service';
import { Employee } from './../../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  formControlObject: FormGroup;
  employeeId: number;

  constructor(private formBuilder: FormBuilder, private service: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.formControlObject = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      age: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      phone: ['', []]
    });

    this.route.paramMap.subscribe(params => {
      this.employeeId = +params.get('id');
      
      if (isNaN(this.employeeId)) {
        this.router.navigate(['/404']);
      } else if (this.employeeId > 0) {
        this.showExistingEmployee(this.employeeId);
      }
    });
  }

  public get name(): AbstractControl {
    return this.formControlObject.get('name');
  }

  public get age(): AbstractControl {
    return this.formControlObject.get('age');
  }

  public get phone(): AbstractControl {
    return this.formControlObject.get('phone');
  }

  submit() {
    if (this.employeeId > 0) {
      this.updateEmployee();
    }
    else {
      this.createNewEmployee();
    }

  }

  private updateEmployee() {
    let data = this.getEmployeeData();
    if (this.employeeId > 0) {
      data.id = this.employeeId;
    }

    this.service.put(data);

    this.router.navigate(['/employees'], {});
  }

  private getEmployeeData(): Employee {
    let data: Employee = {
      id: null,
      name: this.name.value,
      age: this.age.value,
      phone: this.phone.value
    };

    return data;
  }

  private createNewEmployee() {

    let data = this.getEmployeeData();
    this.service.post(data);

    this.router.navigate(['/employees'], {
    });
  }

  private showExistingEmployee(employeeId: number) {
    let employee = this.getEmployee(employeeId);
    if (employee == null) {
      this.router.navigate(['/404'], {
      });
    }
    else {
      this.populateEmployee(employee);
    }
  }

  private populateEmployee(employee: Employee) {
    this.name.setValue(employee.name);
    this.age.setValue(employee.age);
    this.phone.setValue(employee.phone);
  }

  private getEmployee(employeeId: number): Employee {
    return this.service.get(employeeId);
  }

  cancel() {
    this.router.navigate(['/employees'], {
    });
  }
}
