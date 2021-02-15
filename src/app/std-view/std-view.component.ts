import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../Services/student-service.service';

@Component({
  selector: 'app-std-view',
  templateUrl: './std-view.component.html',
  styleUrls: ['./std-view.component.css']
})
export class StdViewComponent implements OnInit {

  studentData = [];
  newStd;
  

  constructor(private myservice : StudentServiceService ) { }

  ngOnInit(): void {
    this.get();
    this.getStdDetail();
  }
  get(){
   this.studentData = JSON.parse(localStorage.getItem("studentData"));
   console.log("new data---> " , this.studentData);
  }

  getStdDetail(){
    this.myservice.getStudentDetail(this.studentData[0].id).subscribe(response => {
      console.log("GHGHFHGF", response);
      this.newStd =  response ;
      console.log("kkkkkkk", this.newStd);
    })
  }

}
