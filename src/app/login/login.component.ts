import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { parseCookieValue } from '@angular/common/src/cookie';
import {Router} from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  cookieENVuserID = '';
  cookieENVtoken = '';

  constructor(
    private loginservice : LoginService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    let k = "";
    console.log(this.cookieService.get('ENVuserID'));
    if(this.cookieService.get('ENVuserID')!=k ){
      this.router.navigate(['dashboard']);
    }
  }

  LoginEvent(event){
    event.preventDefault();
    // console.log(event);
    let username = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    let data={
      "emailID": username,
      "password": password
    };


    
    this.loginservice.LoginEvent(data)
      .subscribe(
        (response) => {
        console.log(response);
        this.cookieService.set( 'ENVuserID', response.userID );
        this.cookieService.set('ENVtoken',response.token);

        this.cookieENVuserID = this.cookieService.get('ENVuserID');
        this.cookieENVtoken = this.cookieService.get('ENVtoken');

        console.log(this.cookieENVuserID,this.cookieENVtoken);
        this.router.navigate(['dashboard']);
        
      },
      (err) =>{
            console.log("error maadi");
      },
      () => {console.log('done!');

    }
    );

     


  }


}
