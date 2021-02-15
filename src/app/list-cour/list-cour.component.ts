import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../Services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cour',
  templateUrl: './list-cour.component.html',
  styleUrls: ['./list-cour.component.css']
})
export class ListCourComponent implements OnInit {

  course = [];

  constructor(private myservice : StudentServiceService, private router : Router) { }

  ngOnInit(): void {
    this.getCourseData();
  }

  getCourseData(){
    this.myservice.getCourse().subscribe(response => {
      this.course = response ;
    })
  }

  deleteCourseDate(id){
    this.myservice.deleteCourse(id).subscribe(response => {
      this.myservice.getCourse().subscribe(response1 => {
        this.course = response1;
      })
    })
  }

  editCourseData(id){
    this.router.navigate(["course-reg-form/"+id]);
  }

}
