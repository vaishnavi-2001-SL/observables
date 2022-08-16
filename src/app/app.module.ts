import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeHttpService } from './employee-http.service';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [EmployeeService, EmployeeHttpService],
})
export class AppModule { }
