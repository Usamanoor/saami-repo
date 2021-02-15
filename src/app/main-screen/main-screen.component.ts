import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentServiceService } from '../Services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  result = [];

  studenCredential = new FormGroup({
    semail : new FormControl('')
  });

  constructor(private myservice:StudentServiceService, private router : Router) { }

  ngOnInit(): void {
  }

  getEmail(){
    this.myservice.getStudentEmail(this.studenCredential.value.semail).subscribe(response =>{
      this.result = response;
      if(this.result.length == 0){
        
        alert("Email not found!");
      }else {
      localStorage.setItem("studentData" , JSON.stringify(this.result));
      console.log('your email ->' , this.result);
      this.router.navigate(["student-view"]);
      }
    })
  
  }

}
