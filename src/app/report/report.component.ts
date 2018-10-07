import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { BroadcastService } from '../broadcast/broadcast.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  reportDetails={
    doctorID:"",
    diagnosis:"",
    comment:"",
    medicine:[],
    //{
    //   'medicineName':"",
    //   'duration':"",
    //   'dosage':"",
    // },
    studentID:"",
    bp:"",
    bmi:"",
    pulse:"",
    weight:""
  };

  varName="";
  varTokenNumber="";
  varDiagnosis="";
  varPrescription="";
  varBp="";
  varWeight="";
  varPulse="";
  varBmi="";

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  constructor(public dialogRef: MatDialogRef<ReportComponent>,private cookieService:CookieService,private getBservice:BroadcastService) { 

  }
  

  addFieldValue(){
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }
  deleteFieldValue(index){
      this.fieldArray.splice(index, 1);
  }
  onSubmit(){
    this.reportDetails.medicine=this.fieldArray;

    this.reportDetails.bp=this.varBp;
    this.reportDetails.pulse=this.varPulse;
    this.reportDetails.weight=this.varWeight;
    this.reportDetails.bmi=this.varBmi;

    this.reportDetails.diagnosis=this.varDiagnosis;
    this.reportDetails.comment=this.varPrescription;

    console.log(this.reportDetails);
    //this.reportDetails.doctorID=this.cookieService.get('DOCuserID');


    this.dialogRef.close();
  }


  
  ngOnInit() {
    
    this.reportDetails.studentID=this.getBservice.getStudentInfo();
    this.varName=this.reportDetails.studentID;
  }

}
