import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ReportComponent } from '../../report/report.component';

@Component({
  selector: 'app-recepttoday',
  templateUrl: './recepttoday.component.html',
  styleUrls: ['./recepttoday.component.scss']
})
export class RecepttodayComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openReportForm(){
    this.dialog.open(ReportComponent,{width: '95%',height: '95%'});
  }
}
