import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { APIfunctionsService } from 'src/app/services/apifunctions.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  massage: string = "";
  Student = new Student();
  constructor(public service: APIfunctionsService, public router: Router){

  }
  createStudent(){
    this.service.postData(this.Student).subscribe((data)=>{
      this.massage = "Student Added Successfully";
      setTimeout(()=>{
        this.massage = "";
      },1000);
      setTimeout(()=>{
        this.router.navigateByUrl("/list");
      },1000);
    });
  }
}
