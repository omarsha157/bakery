import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usernameR:any
  passwordR:any


  constructor(private dataprovider:DataService) { }

  ngOnInit(): void {
  }

  register() {

    this.dataprovider.verifyRegister(this.usernameR, this.passwordR)
  }
}
