import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  msg:string="";
  constructor() { }


  ngOnInit(): void {
  }

  checkuser(loginfomRef:NgForm)
  {
      let loginform=loginfomRef.value;
      //console.log(loginform.username);
      //console.log(loginfomRef.value.password);
      if(loginform.username=="admin"  && loginform.password=="123"){
         this.msg="login successful";
      }
      else{
        this.msg="wrong username or password ";
      }
  }

}
