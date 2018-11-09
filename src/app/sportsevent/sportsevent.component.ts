import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sportsevent',
  templateUrl: './sportsevent.component.html',
  styleUrls: ['./sportsevent.component.scss']
})
export class SportseventComponent implements OnInit {

  constructor(
    
  ) { }

  ngOnInit() {
  }
  CreateEvent(event){
    event.preventDefault();
    let username = event.target.elements[0].value;
    let password = event.target.elements[1].value;

    let data = {
      
    "eventname": event.target.elements[0].value,
    "emailID": event.target.elements[1].value,
    "firstname": event.target.elements[2].value,
    "lastname": event.target.elements[3].value,
    "mobileNo": event.target.elements[4].value,
    "eventtype": event.target.elements[5].value,
    "date": event.target.elements[6].value,
    "description": event.target.elements[7].value
    }
  }
}
