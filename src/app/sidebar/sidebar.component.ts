import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../Services/student-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private myservice:StudentServiceService) { }

  ngOnInit(): void {
    this.getStudents();

  }

  getStudents(){
    this.myservice.getStudents().subscribe(response=>{
      console.log("=========> ",response);  
    });
  }



}
