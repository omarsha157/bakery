import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  db:any

  database:any = {
    abc_123 : {userName:"abc_123",email:"abc@gmail.com",password:"abc"},
    max : {userName:"max",email:"max@gmail.com",password:"abc"},
    john : {userName:"john",email:"john@gmail.com",password:"abc"},
  }



  constructor(private navi:Router) { }

  saveDetails(uname:any) {
    if(this.database){
      localStorage.setItem("dbase",JSON.stringify(this.database[uname]))
    }
    if(this.currentUser) {
      localStorage.setItem("Cuser", JSON.stringify(this.currentUser))
    }
  }

  getDetails() {
    if(localStorage.getItem('dbase')) {
      this.db = JSON.parse(localStorage.getItem('dbase') || '')
    }
    if(localStorage.getItem('Cuser')) {
      this.currentUser = JSON.parse(localStorage.getItem('Cuser') || '')
      return this.currentUser
    }
  }


  verifyLogin(a:any,b:any) {
    if(a in this.database) {
      if(b ==  this.database[a].password) {
        alert("success")
        this.currentUser = a
        this.saveDetails(a)
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
      alert('success')
      console.log(this.database)

    } else {
      alert("already a user, please login")
    }
  }

}
