import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  public states = ["Andhra Pradesh","Telangana","Karnataka","Maharastra"];
  public empData:IEmployee;
  public id:number;

  constructor(private activatedRoute:ActivatedRoute, private employeeService:EmployeeService, private router:Router) {
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
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.id = parseInt(params.get('id'));
    });
    
    this.employeeService.getById(this.id)
    .subscribe(data=>{
      console.log(data);
      this.empData = data;
    })

  }

  cancel(){
    this.router.navigate(['/employeeDetails']);
  }

  update(){
    console.log(this.empData);
    this.employeeService.updateEmployee(this.empData)
    .subscribe(data=>{
      console.log(data);
    });
    alert("Updated");
    this.router.navigate(['/employeeDetails']);
  }

  delete(id){
    if(confirm("Are You Sure You Want to Delete This Employee?")){
      this.employeeService.deleteEmployee(id)
      .subscribe(data=>{
        console.log(data);
      });
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
    } else{
      //
    }
  }

}
