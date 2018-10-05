import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { DocloginService } from './doclogin.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.scss']
})
export class DocloginComponent implements OnInit {
  cookieDOCuserID = '';
  cookieDOCtoken = '';

  constructor(
    private loginservice : DocloginService,
    private cookieService: CookieService,
    private router: Router

  ) { }

  ngOnInit() {
    let k = "";
    console.log(this.cookieService.get('DOCuserID'));
    if(this.cookieService.get('DOCuserID')!=k ){
      this.router.navigate(['doctor/current']);
    }
  }

  LoginEvent(event){
    event.preventDefault();
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
        this.cookieService.set( 'DOCuserID', response.doctorID );
        this.cookieService.set('DOCtoken',response.token);

        this.cookieDOCuserID = this.cookieService.get('DOCuserID');
        this.cookieDOCtoken = this.cookieService.get('DOCtoken');

        console.log(this.cookieDOCuserID,this.cookieDOCtoken);
        this.router.navigate(['doctor/current']);
        
      },
      (err) =>{
            console.log("error maadi");
      },
      () => {console.log('done!');

    }
    );

     


  }


}
