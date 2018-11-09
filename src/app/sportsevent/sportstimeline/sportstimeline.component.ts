import { Component, OnInit } from '@angular/core';
import { AlltimelineService } from '../../appointmententry/alltimeline.service';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { parseCookieValue } from '@angular/common/src/cookie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sportstimeline',
  templateUrl: './sportstimeline.component.html',
  styleUrls: ['./sportstimeline.component.scss']
})
export class SportstimelineComponent implements OnInit {

  constructor(
    private timeservice : AlltimelineService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.FetchTimeline("");
  }
  FetchTimeline(urk){
    this.timeservice.FetchTimeline(urk)
      .subscribe(
        (response) => {
        console.log(response);
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
