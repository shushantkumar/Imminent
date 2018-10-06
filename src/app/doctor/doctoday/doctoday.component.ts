import { MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ReportComponent } from '../../report/report.component';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { CurrententryService } from '../../appointmententry/currententry.service';

@Component({
  selector: 'app-doctoday',
  templateUrl: './doctoday.component.html',
  styleUrls: ['./doctoday.component.scss']
})
export class DoctodayComponent implements OnInit {
  alldata;

  constructor(
    public dialog: MatDialog,
    private cookieService: CookieService,
    private router: Router,
    private getService:CurrententryService
    ) { }

  ngOnInit() {
    this.getAllHistory();
  }
  openReportForm(){
    this.dialog.open(ReportComponent,{width: '95%',height: '95%'});

  }

  Logout(){
    this.cookieService.set( 'DOCuserID', "" );
    this.cookieService.set('DOCtoken',"");
    this.router.navigate(['doctor/login']);
  }

  getAllHistory(){
    var data = this.cookieService.get('DOCuserID');
    console.log("Something is going on!");
    this.getService.DoctorAppointment(data).subscribe(
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
