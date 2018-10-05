import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { RecptionistService } from './recptionist.service';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.scss']
})
export class ReceptionistComponent implements OnInit {
  cookieRECuserID = '';
  cookieRECtoken = '';

  constructor(
    private loginservice : RecptionistService,
    private cookieService: CookieService,
    private router: Router

  ) { }

  ngOnInit() {    
    let k = "";
    console.log(this.cookieService.get('RECuserID'));
    if(this.cookieService.get('RECuserID')!=k ){
      this.router.navigate(['reception/current']);
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
        this.cookieService.set( 'RECuserID', response.RECtorID );
        this.cookieService.set('RECtoken',response.token);

        this.cookieRECuserID = this.cookieService.get('RECuserID');
        this.cookieRECtoken = this.cookieService.get('RECtoken');

        console.log(this.cookieRECuserID,this.cookieRECtoken);
        this.router.navigate(['reception/current']);
        
      },
      (err) =>{
            console.log("error maadi");
      },
      () => {console.log('done!');

    }
    );

     


  }
}
