import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { ReportComponent } from '../../report/report.component';
import { CurrententryService } from '../../appointmententry/currententry.service';

@Component({
  selector: 'app-recepttoday',
  templateUrl: './recepttoday.component.html',
  styleUrls: ['./recepttoday.component.scss']
})
export class RecepttodayComponent implements OnInit {
  alldata;
  allApproveddata;
  datetime;
  constructor(
    public dialog: MatDialog,
    private cookieService: CookieService,
    private router: Router,
    private getService:CurrententryService
    ) { }

  ngOnInit() {
    let k = "";
    console.log(this.cookieService.get('RECuserID'));
    if(this.cookieService.get('RECuserID')==k ){
      this.router.navigate(['reception']);
    }
    this.getAllHistory();
    this.getApproved();
  }


  Logout(){
    this.cookieService.set( 'RECuserID', "" );
    this.cookieService.set('RECtoken',"");
    this.router.navigate(['reception']);
  }

  getAllHistory(){
    console.log("Something is going on!");
    this.getService.ReceptionAppointment().subscribe(
      (res) =>{
          let response = res.pendings;
          this.alldata = response;
          console.log(response);
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );

}

  getApproved(){
    console.log("Approved Table");
    this.getService.ReceptionApproved().subscribe(
      (res) =>{
          let response = res.pendings;
          this.allApproveddata = response;
          console.log(response);
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );
  }

  Approve(event){
    console.log("Appontment booking initiated");
    let appID = event._id;
    let data = [
      {
      "propName":"flag",
      "value":"0"
      }
      
    ];
    console.log(appID,data);
    this.getService.PatchAppointment(data,appID).subscribe(
      (res) =>{
        let response = res;
        // this.alldata = response;
        console.log(response);
        
      }, 
    (err) => console.log(err),
    () => console.log('done!')
);
// this.router.navigate(['reception/current']);
this.getAllHistory();

  }

  ChangeTime(event){
    console.log("Appontment booking initiated");

    // put the particular entries ID
    let appID = event._id;

    // put the updated date from the form
    let updated = event.date;
    let data = [
      {
      "propName":"date",
      "value": updated
      }
      
    ];
    console.log(appID,data);
    this.getService.PatchAppointment(data,appID).subscribe(
      (res) =>{
        let response = res;
        // this.alldata = response;
        console.log(response);
        
      }, 
    (err) => console.log(err),
    () => console.log('done!')
);
// this.router.navigate(['reception/current']);
this.getAllHistory();
    }

}
