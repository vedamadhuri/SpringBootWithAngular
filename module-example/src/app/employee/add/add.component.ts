import { Component, OnInit } from '@angular/core';
import{EmployeeService} from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private employee:Employee=new Employee();
  submit=false;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.submit=true;
    this.save();
  }
  save() {
    this.employeeService.createEmployee(this.employee)
    .subscribe(data=>console.log(data),error => console.log(error));
    
  }
}
