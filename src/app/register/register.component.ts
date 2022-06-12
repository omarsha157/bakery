import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm = this.fb.group({
    username:["",[Validators.required,Validators.pattern("[a-zA-Z0-9_]*")]],
    password:["",[Validators.required,Validators.pattern("[a-zA-Z0-9_]*")]]
  })


  constructor(private dataprovider:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    if(this.registerForm.valid) {
      this.dataprovider.verifyRegister(this.registerForm.value.username, this.registerForm.value.password)
    } else {
      alert("invalid form")
    }
  }
}
