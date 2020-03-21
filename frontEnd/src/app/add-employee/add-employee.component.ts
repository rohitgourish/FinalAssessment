import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public states = ["Andhra Pradesh","Telangana","Karnataka","Maharastra"];
  public empData:IEmployee;
  
  constructor(private employeeService:EmployeeService, private router:Router) { 
    this.empData = {
      id:null,
      firstname:null,
      lastname:null,
      email:null,
      address:null,
      city:null,
      state:null,
      gender:null
    }
  }

  ngOnInit() {
  }

  addEmployee(){
    console.log(this.empData);
    this.employeeService.insertEmployee(this.empData)
    .subscribe(data=>{
      console.log(data);
    });
    alert("Record Inserted");
    this.router.navigate(['/employeeDetails']);
  }

}
