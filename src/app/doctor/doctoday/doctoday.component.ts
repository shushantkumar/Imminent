import { MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ReportComponent } from '../../report/report.component';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { CurrententryService } from '../../appointmententry/currententry.service';
//importing intercomponent comm service
import { BroadcastService } from '../../broadcast/broadcast.service';

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
    private getService:CurrententryService,
    private getBService:BroadcastService
    ) { }

  ngOnInit() {
    this.getAllHistory();
  }
  openReportForm(meta){
    //here I should invoke service to set the value
    this.getBService.setStudentInfo([meta.student._id,meta.student.name,meta.token]);
    this.dialog.open(ReportComponent,{width: '95%',height: '95%'});
    this.getService.DeleteAppointment(meta._id).subscribe(
      (res) =>{
          let response = res;
          // this.alldata = response;
          console.log(response);
        }, 
      (err) => console.log(err+"error maadi"),
      () => console.log('done!')
  );
  }

  Logout(){
    this.cookieService.set( 'DOCuserID', "" );
    this.cookieService.set('DOCtoken',"");
    this.router.navigate(['doctor/login']);
  }

  getAllHistory(){
    var data = this.cookieService.get('DOCuserID');
    
    console.log("Something is going on!");
    console.log("doc"+data);
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
