import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit {

  msg:string="";

  constructor() { }

  ngOnInit(): void {
  }
student(information : NgForm)
  {
    information.value.mathes
     information.value.english
     information.value.sci
    if (information .value.mathes >= 33 && information.value.english >= 33 && information.value.sci >= 33){
     this.msg ="you are pass"; }
    else{
        this.msg="yoa are fail";
      }
  }


  }

