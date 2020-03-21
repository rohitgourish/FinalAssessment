import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


const routes: Routes = [
  { path:'', redirectTo:"/employeeDetails", pathMatch:'full'},
  { path:'employeeDetails', component:EmployeeDetailsComponent},
  { path:'editEmployee/:id', component:EditEmployeeComponent},
  { path: 'addEmployee', component:AddEmployeeComponent},
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
