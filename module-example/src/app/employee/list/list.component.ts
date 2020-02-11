import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: Observable<Employee[]>
 
  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(data => { console.log(data), this.reloadData() });
  }

  updateEmployee(id: number) {
    console.log(id);
     this.router.navigate(['employees/update',id]);
  }
}
