import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { StudentServiceService } from '../Services/student-service.service';
import { Student } from './student';
import * as $ from "jquery";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  studentObj = new Student(); 
  newId;
  courseFee:any=[];
  totalAmount;
  course = [];
  instructorData = [] ;
  studentcourses:any;
  multiselectdata:any =[];
  totalFee= 0 ;
 

  student = new FormGroup({
    fname : new FormControl('',[Validators.required]),
    lname : new FormControl('',[Validators.required]),
    gender : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    phone : new FormControl([Validators.required]),
    code : new FormControl('',[Validators.required]),
    address : new FormControl('', [Validators.required]),
    courseId : new FormControl([],[Validators.required]),
    section : new FormControl('',[Validators.required]),
    instructorId : new FormControl('', [Validators.required]),
    discount : new FormControl(''),
    totalAmount : new FormControl(''),
    fee : new FormControl('')  

    
  });

  

  constructor(private myService: StudentServiceService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getInstructor();
    this.getCourse();
    this.getData();
    console.log(this.activatedroute.snapshot.params.id);
    this.newId = this.activatedroute.snapshot.params.id;
    if( this.newId != null) {
      this.myService.getStudentsById(this.newId).subscribe(response => {
        this.student.setValue({
          fname : response.fname,
          lname : response.lname,
          address : response.address,
          email : response.email,
          phone : response.phone,
          code : response.code,
          gender : response.gender,
          courseId : response.courseId,
          section : response.section,
          instructorId : response.instructorId,
          discount : response.discount,
          totalAmount : response.totalAmount,
          fee : response.fee
        });
        
        
      })
    }
  }

  getFee(){
    console.log(this.multiselectdata);
    let query = "?";
    for(let data of this.multiselectdata){
      if(query.includes("id")){
        query+="&";
      }
      query+="id="+data;
       
    }
    console.log(query);
    this.myService.getCourseById(query).subscribe(response => {
      console.log("Course ki fee " , response);
      this.courseFee = response;
      console.log(this.courseFee);
      this.totalFee = 0 ;
      for(let val of response){
        this.totalFee += val.courseFee;
      }
      console.log("OOOOOOO -> " + this.totalFee);
      this.student.controls['fee'].patchValue(this.totalFee);

    //   for(let val of this.courseFee){
    //     this.totalFee += val.courseFee;
    //     console.log("llll---> " + this.totalFee)
    //  }

    });
   
  
    //this.studentcourses=$('#select-meal-type').val();
    // this.myService.getCourseById(value).subscribe(response => {
    //   this.courseFee = response.courseFee;
    //   this.student.controls['fee'].patchValue(this.courseFee);
    // })
  }

  getCourse(){
    this.myService.getCourse().subscribe(response => {
      console.log("new course get--> " , response)
      this.course = response;
    })
  }

  getInstructor(){
    this.myService.getInstructors().subscribe(response => {
      this.instructorData = response;
    })
  }

  handleSave() {
    
    console.log(this.studentcourses);
    if(this.newId != null ) {
      this.student.get("courseId").setValue(this.student.value.courseId);
      this.student.get("instructorId").setValue(+this.student.value.instructorId); 
      this.myService.putStudent(this.newId, this.student.value).subscribe(response => {
        
      })
    } else {
      this.student.get("courseId").setValue(this.student.value.courseId);
      this.student.get("instructorId").setValue(+this.student.value.instructorId); 
    this.myService.postStudent(this.student.value).subscribe(response => {
      console.log(this.student.value);
    alert('form submited!');
    this.student.reset();
    
    });
  }
  this.student.reset();
  
    
    
  }

  postData(){
    this.myService.postStudent(this.studentObj).subscribe(response=>{

    })
  }

  getData(){
    this.myService.getStudents().subscribe(response => {
      console.log("--> " , response);
    })
  }

  discount(value){
    let fee = this.student.controls['fee'].value;
    this.totalAmount = fee - value;
    this.student.controls['totalAmount'].patchValue(this.totalAmount);
  }

  onSubmit(){
    
  }

}
