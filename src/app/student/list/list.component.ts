import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { APIfunctionsService } from 'src/app/services/apifunctions.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  massage: string = "";
  allData!: any[];
  constructor(public service:APIfunctionsService, public router:Router){
    this.ShowData();

  }
  ShowData(){
    this.service.getData().subscribe((data:any)=>{
      this.allData = data;
    });
  }
  deleteItem(id:any){
    this.service.deleteData(id).subscribe((data)=>{
      this.massage = "Student Deleted Successfully";
      setTimeout(()=>{
        this.massage = "";
      },1000);
      setTimeout(()=>{
        this.ShowData();
      },1000);
    });
  }
}
