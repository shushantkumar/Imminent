import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { PastentryService } from '../../appointmententry/pastentry.service';

@Component({
  selector: 'app-receptpast',
  templateUrl: './receptpast.component.html',
  styleUrls: ['./receptpast.component.scss']
})
export class ReceptpastComponent implements OnInit {
  alldata;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private pastentryService:PastentryService
  ) { }

  ngOnInit() {
    let k = "";
    console.log(this.cookieService.get('RECuserID'));
    if(this.cookieService.get('RECuserID')==k ){
      this.router.navigate(['reception']);
    }
    this.getAllHistory();
  }


  Logout(){
    this.cookieService.set( 'RECuserID', "" );
    this.cookieService.set('RECtoken',"");
    this.router.navigate(['reception']);
  }

  getAllHistory(){
    // var data = this.cookieService.get('DOCuserID');
    console.log("Something is going on!");
    this.pastentryService.ReceptionAll().subscribe(
      (res) =>{
          let response = res.visit;
          this.alldata = response;
          console.log(response);
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );

  }

}
