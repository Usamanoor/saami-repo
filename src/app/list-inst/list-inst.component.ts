import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../Services/student-service.service';

@Component({
  selector: 'app-list-inst',
  templateUrl: './list-inst.component.html',
  styleUrls: ['./list-inst.component.css']
})
export class ListInstComponent implements OnInit {

  instructor = [];

  constructor(private myservices:StudentServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getInstructorsData();
  }

  getInstructorsData() {
    this.myservices.getInstructors().subscribe(response => {
      this.instructor = response ;
    });
    
  }

  deleteInstructor(id){
    this.myservices.deleteInstructor(id).subscribe(response =>{
      this.myservices.getInstructors().subscribe(response1 => {
        this.instructor = response1
      }) 
    })
  }

  editInstructor(id){
    this.router.navigate(["instructor/"+id]);
  }
 

}
