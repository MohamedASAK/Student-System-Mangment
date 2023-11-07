import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIfunctionsService {
  private URL = 'http://localhost:3000/student';
  constructor(public http:HttpClient) {  }
  getData(){
    return this.http.get(this.URL);
  }
  getDataByID(id:any){
    return this.http.get(this.URL+`/${id}`);
  }
  postData(ObjData:any){
    return this.http.post(this.URL,ObjData);
  }
  deleteData(id:any){
    return this.http.delete(this.URL+`/${id}`);
  }
  putData(id:any,updatedObj:any){
    return this.http.put(this.URL+`/${id}`,updatedObj);
  }
}
