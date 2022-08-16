import { Component,OnInit } from '@angular/core';
import { EmployeeHttpService} from './employee-http.service';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  public employee:Employee[] =[];
  constructor(private employeehttpService: EmployeeHttpService) {}

  ngOnInit() {
    this.employeehttpService
      .getEmployee()
      .subscribe((data: any[]) => (this.employee = data));
  }
}
