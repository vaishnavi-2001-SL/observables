import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './model/employee';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {
  private jsonUrl: string = '/assets/data/employee.json';

  constructor(private httpClient: HttpClient) { }
 getEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]> ( "http://localhost:3000/employees");
  }

}

