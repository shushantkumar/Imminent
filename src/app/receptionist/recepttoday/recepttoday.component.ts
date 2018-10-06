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
  }
  // openReportForm(){
  //   this.dialog.open(ReportComponent,{width: '95%',height: '95%'});
  // }

  Logout(){
    this.cookieService.set( 'RECuserID', "" );
    this.cookieService.set('RECtoken',"");
    this.router.navigate(['reception']);
  }

  getAllHistory(){
    // var data = this.cookieService.get('DOCuserID');
    console.log("Something is going on!");
    this.getService.ReceptionAppointment().subscribe(
      (res) =>{
          let response = res.pending;
          this.alldata = response;
          console.log(response);
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );

}

}
