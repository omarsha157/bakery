import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // password:any
  // username:any

  loginForm = this.fb.group({
    username:["",[Validators.required,Validators.pattern("[a-zA-Z0-9_]*")]],
    password:["",[Validators.required,Validators.pattern("[a-zA-Z0-9_]*")]]
  })

  
  constructor(private dataprovider:DataService, private naviagtor:Router, private fb:FormBuilder) { 
  }

  ngOnInit(): void {
  }
  

  login() {
    let uname = this.loginForm.value.username
    let pswd = this.loginForm.value.password

    if(this.loginForm.valid) {

      this.dataprovider.verifyLogin(uname, pswd)
    } else {
      alert("invalid form")
    }
  }

}
