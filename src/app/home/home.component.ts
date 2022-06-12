import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser:any
  
  constructor(private dataprovider:DataService) {
    this.dataprovider.getDetails()
  }

  ngOnInit(): void {
  }

}
