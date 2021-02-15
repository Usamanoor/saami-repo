import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../Services/student-service.service';

@Component({
  selector: 'app-list-std',
  templateUrl: './list-std.component.html', 
  styleUrls: ['./list-std.component.css']
})
export class ListStdComponent implements OnInit {

  studentArr = [];

  constructor(private myservice: StudentServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getData();

  }

  getData() {
    this.myservice.getStudents().subscribe(response => {
      this.studentArr = response;
      console.log("data in list  ", response)
    })
  }

  deleteData(id) {
    this.myservice.deleteStudent(id).subscribe(response => {
      this.myservice.getStudents().subscribe(response1 => {
        this.studentArr = response1 ;
        console.log(response);
      })
    })

  }
  editData(id: any) {
    this.router.navigate(['student-reg-from/'+id])

  }

}
