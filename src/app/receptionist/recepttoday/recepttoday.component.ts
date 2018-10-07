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
  some_val;
  //for storing the entered time updated variable is used with a two way binding
  updated;
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

  //function to trucate the date the date part of date time
  truncDate(val:string):string
  {
      let hour=parseInt(val[11])*10+parseInt(val[12]);
      let minute=parseInt(val[14])*10+parseInt(val[15]);
      let hour1=hour-5+parseInt(this.some_val[0])*10+parseInt(this.some_val[1]);
      let minute1=minute-30+parseInt(this.some_val[3])*10+parseInt(this.some_val[4]);
      console.log(hour1);
      //converting to string
      let final=hour1.toString()+":"+minute1.toString();
      console.log(hour1+minute1);
      return final;

  }
  

  //to change time
  ChangeTime(meta){
    console.log("Appointment booking initiated");

    // put the particular entries ID
    let appID = meta._id;
    console.log(meta.approx_date);

    let time = this.truncDate(meta.approx_date.toString());

    // put the updated date from the form
    console.log("asdf"+meta.approx_date.substring(0,10)+"T"+time+":00.085Z");
    
    let data = [
      {
      "propName":"approx_date",
      "value": meta.approx_date.substring(0,10)+"T"+time+":00.085Z" //  2018-10-07T22:09:50.085Z"
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
this.router.navigate(['reception/current']);
this.getAllHistory();
    }

}
