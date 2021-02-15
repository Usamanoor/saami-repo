import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentServiceService } from '../Services/student-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  course = new FormGroup({
    courseName : new FormControl('',[Validators.required]),
    courseFee : new FormControl('',[Validators.required]),
    startingDate : new FormControl('', [Validators.required]),
    endingDate : new FormControl('', [Validators.required])
  });

  courseId;

  constructor(private myservice:StudentServiceService, private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseId = this.activatedRouted.snapshot.params.id;
    if(this.courseId != null){
      this.myservice.getCourseById(this.courseId).subscribe(response => {
        this.course.setValue({
          courseName : response.courseName,
          courseFee : response.courseFee,
          startingDate : response.startingDate,
          endingDate : response.endingDate
        })
      })
    }
  }

  postCourseData(){
    this.course.get("courseFee").setValue(+this.course.value.courseFee);
    if(this.courseId != null){
        this.myservice.putCourse(this.courseId, this.course.value).subscribe(response1 => {});
    } else {
      this.myservice.postCourse(this.course.value).subscribe(response => {

      });
      alert("Course Posted!");
      this.course.reset();
    }
    this.course.reset();
    
  }

}
