import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  sEmail = "";
  

  // studenCredential = new FormGroup({
  //   sEmail : new FormControl(''),
  //   sPassword : new FormControl('')
  // });

  constructor() { }

  ngOnInit(): void {
  }

}
