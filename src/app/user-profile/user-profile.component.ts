import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as Chartist from 'chartist';
import { HistoryService } from '../table-list/history.service';
// import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userdetails;
  constructor(private cookieService: CookieService,private allrequestsService:HistoryService) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails(){
    this.allrequestsService.getUserDetails().subscribe(
      (res) =>{
          // console.log(res.orders);
          let response = res.user;
          console.log(response);
          this.userdetails=response;
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );
  }

}
