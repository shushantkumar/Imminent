import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { ReportComponent } from '../../report/report.component';

@Component({
  selector: 'app-recepttoday',
  templateUrl: './recepttoday.component.html',
  styleUrls: ['./recepttoday.component.scss']
})
export class RecepttodayComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private cookieService: CookieService,
    private router: Router
    ) { }

  ngOnInit() {
    let k = "";
    console.log(this.cookieService.get('RECuserID'));
    if(this.cookieService.get('RECuserID')==k ){
      this.router.navigate(['reception']);
    }
  }
  // openReportForm(){
  //   this.dialog.open(ReportComponent,{width: '95%',height: '95%'});
  // }
}
