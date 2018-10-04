import { MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ReportComponent } from '../../report/report.component';

@Component({
  selector: 'app-doctoday',
  templateUrl: './doctoday.component.html',
  styleUrls: ['./doctoday.component.scss']
})
export class DoctodayComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openReportForm(){
    this.dialog.open(ReportComponent,{width: '95%',height: '95%'});
  }


}
