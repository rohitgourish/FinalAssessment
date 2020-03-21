import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public errorMessage:string;
  public searchData:any;
  public empData:IEmployee[];
  constructor(private employeeService:EmployeeService, private router:Router) {
    this.searchData = {
      firstname:null
    }
   }

  ngOnInit() {
    this.employeeService.getAllDetails()
    .subscribe(data=>{
      this.empData = data;
    });
  }

  addCustomer(){
    this.router.navigate(['/addEmployee']);
  }

  editEmployee(id){
    this.router.navigate(['/editEmployee',id]);
  }

  searchEmployee(){
    this.errorMessage='';
    console.log(this.searchData);
    this.employeeService.getByName(this.searchData)
    .subscribe(data=>{
      console.log(data);
      if(data.success==404){
        this.errorMessage = data.message;
      }else{
        this.empData = data;
      }
    });
  }

}
