import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { PastentryService } from '../../appointmententry/pastentry.service';

@Component({
  selector: 'app-docpast',
  templateUrl: './docpast.component.html',
  styleUrls: ['./docpast.component.scss']
})
export class DocpastComponent implements OnInit {
  alldata;
  fieldArray;
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private pastentryService:PastentryService

  ) { }

  ngOnInit() {
    this.getAllHistory();
  }

  Logout(){
    this.cookieService.set( 'DOCuserID', "" );
    this.cookieService.set('DOCtoken',"");
    this.router.navigate(['doctor/login']);
  }

  getAllHistory(){
    var data = this.cookieService.get('DOCuserID');
    console.log("Something is going on!");
    this.pastentryService.DoctorPast(data).subscribe(
      (res) =>{
          let response = res.visit;
          this.alldata = response;
          this.fieldArray = response;
          console.log(response);
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );

  }

}
