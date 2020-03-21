import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllDetails():Observable<IEmployee[]>{
    let url = `http://localhost:3000/getAllDetails`;
    let result = this.http.get<IEmployee[]>(url);
    return result;
  }

  insertEmployee(data):Observable<IEmployee>{
    let url = `http://localhost:3000/insert`;
    let result = this.http.post<IEmployee>(url,data);
    return result;
  }

  getById(id):Observable<IEmployee>{
    let url = `http://localhost:3000/getById/${id}`;
    let result = this.http.get<IEmployee>(url);
    return result;
  }

  deleteEmployee(id):Observable<IEmployee>{
    let url = `http://localhost:3000/delete/${id}`;
    let result = this.http.delete<IEmployee>(url);
    return result;
  }

  updateEmployee(data):Observable<IEmployee>{
    let url = `http://localhost:3000/update`;
    let result = this.http.put<IEmployee>(url,data);
    return result;
  }

  getByName(data):Observable<any>{
    console.log(data);
    let url = `http://localhost:3000/getByName`;
    let result = this.http.post<any>(url,data);
    return result;
  }

}
