import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../Services/student-service.service';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  constructor(private myservices:StudentServiceService ) { }

  greeting(){
    this.myservices.sendMessage("Good Morning");
  }

  appreciateStd(){
    this.myservices.sendMessage("Well Done");
  }

  ngOnInit(): void {
  }

}
