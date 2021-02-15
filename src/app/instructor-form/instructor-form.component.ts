import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../Services/student-service.service';

@Component({
  selector: 'app-instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.css']
})
export class InstructorFormComponent implements OnInit {

  newId;
  instructor = new FormGroup({
    fname : new FormControl('',[Validators.required]),
    lname : new FormControl('',[Validators.required]),
    gender : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    phone : new FormControl([Validators.required]),
    address : new FormControl('', [Validators.required]),
    class : new FormControl('',[Validators.required]),
    section : new FormControl('',[Validators.required]),
    
    
  });

  constructor(private myservices : StudentServiceService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    console.log("newId -> " + this.activatedRoute.snapshot.params.id);
    this.newId = this.activatedRoute.snapshot.params.id;
    if(this.newId != null) {
      this.myservices.getInstructorById(this.newId).subscribe(response => {
        this.instructor.setValue({
          fname : response.fname,
          lname : response.lname,
          address : response.address,
          email : response.email,
          phone : response.phone,
          gender : response.gender,
          class : response.class,
          section : response.section,
        })
      })
    }
  }

  submitInstructor(){
    if(this.newId != null) {
      this.myservices.putInstructor(this.newId, this.instructor.value).subscribe(response => {

      });
      this.instructor.reset();
    } else {
    this.myservices.postInstructor(this.instructor.value).subscribe(response => {
      console.log("post instructor -> ", response)
    });
    this.instructor.reset();
    }

  }

}
