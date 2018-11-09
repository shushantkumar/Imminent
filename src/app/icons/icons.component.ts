import { Component, OnInit } from '@angular/core';
import { AlltimelineService } from '../appointmententry/alltimeline.service';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { parseCookieValue } from '@angular/common/src/cookie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor(
    private timeservice : AlltimelineService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  CreateEvent(event){
    event.preventDefault();

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
    var urk = "sja" ;
    this.timeservice.CreateEvent(data,urk)
    .subscribe(
      (response) => {
      console.log(response);


      this.router.navigate(['/icons/timeline']);
      
    },
    (err) =>{
          console.log("error maadi");
    },
    () => {console.log('done!');

  }
  );
  }
}
