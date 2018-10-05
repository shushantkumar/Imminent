import { MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ReportComponent } from '../../report/report.component';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctoday',
  templateUrl: './doctoday.component.html',
  styleUrls: ['./doctoday.component.scss']
})
export class DoctodayComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private cookieService: CookieService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  openReportForm(){
    this.dialog.open(ReportComponent,{width: '95%',height: '95%'});
  }

  Logout(){
    this.cookieService.set( 'DOCuserID', "" );
    this.cookieService.set('DOCtoken',"");
    this.router.navigate(['doctor/login']);
  }

}
