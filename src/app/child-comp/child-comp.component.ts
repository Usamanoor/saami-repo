import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../Services/student-service.service';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  constructor(private myservice: StudentServiceService) { }

  ngOnInit(): void {
    this.myservice.teacherMessage$.subscribe(
      msg => {
        if(msg == "Good Morning"){
          alert("Good morning Teacher")
        } else if (msg == "Well Done"){
          alert("Thank you teacher")
        }
      }
    )
  }

}
