import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-docpast',
  templateUrl: './docpast.component.html',
  styleUrls: ['./docpast.component.scss']
})
export class DocpastComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  Logout(){
    this.cookieService.set( 'DOCuserID', "" );
    this.cookieService.set('DOCtoken',"");
    this.router.navigate(['doctor/login']);
  }

}
