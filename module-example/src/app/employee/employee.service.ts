import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseUrl = 'http://localhost:8447/employees'
  constructor(private http: HttpClient) { }

  getEmployee(employeeid: number): any {
    return this.http.get(this.baseUrl + '/' + employeeid);
  }
  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(this.baseUrl, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(this.baseUrl + '/' + id, value);
  }

  deleteEmployee(employeeid: number): Observable<Object> {
    return this.http.delete(this.baseUrl + '/' + employeeid);
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
