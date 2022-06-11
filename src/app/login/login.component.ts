import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password:any
  username:any
  
  constructor(private dataprovider:DataService, private naviagtor:Router) { 
  }

  ngOnInit(): void {
  }
  

  login() {
    let uname = this.username
    let pswd = this.password

    this.dataprovider.verifyLogin(uname, pswd)
  }

  showDb() {
    console.log(this.dataprovider.database)
  }

}
