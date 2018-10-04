import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  constructor(public dialogRef: MatDialogRef<ReportComponent>) { }
  

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }
  onSubmit(){
    this.dialogRef.close();
  }


  
  ngOnInit() {
  }

}
