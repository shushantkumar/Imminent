import { Component, OnInit } from '@angular/core';
import { AlltimelineService } from '../../appointmententry/alltimeline.service';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { parseCookieValue } from '@angular/common/src/cookie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mapstimeline',
  templateUrl: './mapstimeline.component.html',
  styleUrls: ['./mapstimeline.component.scss']
})
export class MapstimelineComponent implements OnInit {
  timelinedata;
  constructor(
    private timeservice : AlltimelineService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.FetchTimeline("sac");
  }
  FetchTimeline(urk){
    this.timeservice.FetchTimeline(urk)
      .subscribe(
        (response) => {
        console.log(response);
        this.timelinedata = response.users;
        console.log(this.timelinedata);
        // this.cookieService.set( 'ENVuserID', response.userID );
        // this.cookieService.set('ENVtoken',response.token);
        
        
      },
      (err) =>{
            console.log("error maadi");
      },
      () => {console.log('done!');

    }
    );
  }

}
