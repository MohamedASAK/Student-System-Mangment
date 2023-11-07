import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { APIfunctionsService } from 'src/app/services/apifunctions.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  id!:any;
  massage: string = "";
  Student = new Student();
  constructor(public service: APIfunctionsService, public router:Router, public activeRoute: ActivatedRoute){
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.service.getDataByID(this.id).subscribe((data:any)=>{
      this.Student = data;
    })
  }
  updateStudent(){
    this.service.putData(this.id,this.Student).subscribe((data)=>{
      this.massage = "Student Data Updated Successfully";
      this.router.navigateByUrl("/list");
      setTimeout(()=>{
        this.massage = "";
      },1000);
      setTimeout(()=>{
      },1000);
    });
  }
}
