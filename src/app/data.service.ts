import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  database:any = {
    abc_123 : {userName:"abc_123",email:"abc@gmail.com",password:"abc"},
  }


  constructor(private navi:Router) { }

  verifyLogin(a:any,b:any) {
    if(a in this.database) {
      if(b ==  this.database[a].password) {
        alert("success")
        this.navi.navigateByUrl('home')
      } else {
        alert("incorrect password")
      }
    } else {
      alert("incorrect username")
    }
  }

  verifyRegister(userName:any, password:any) {

    if(!(userName in this.database)) {

      this.database[userName] = {userName,password}
      console.log(this.database)

    } else {
      alert("already a user, please login")
    }
  }

}
