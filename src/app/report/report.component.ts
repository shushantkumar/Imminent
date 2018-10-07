import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { BroadcastService } from '../broadcast/broadcast.service';
import { PastentryService } from '../appointmententry/pastentry.service';

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
  varActualname = "";
  varTokenNumber="";
  varDiagnosis="";
  varPrescription="";
  varBp="";
  varWeight="";
  varPulse="";
  varBmi="";

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  constructor(
    public dialogRef: MatDialogRef<ReportComponent>,
    private cookieService:CookieService,
    private getBservice:BroadcastService,
    private finappoint: PastentryService
    ) { 

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
    this.reportDetails.doctorID=this.cookieService.get('DOCuserID');

    let data = this.reportDetails;
    this.finappoint.AppointmentDone(data)
    .subscribe(
      (response) => {
      console.log(response);
      // this.cookieService.set( 'ENVuserID', response.userID );
      // this.cookieService.set('ENVtoken',response.token);

      // this.cookieENVuserID = this.cookieService.get('ENVuserID');
      // this.cookieENVtoken = this.cookieService.get('ENVtoken');

      // console.log(this.cookieENVuserID,this.cookieENVtoken);
      // this.router.navigate(['dashboard']);
      
    },
    (err) =>{
          console.log("error maadi");
    },
    () => {console.log('done!');

  }
  );
    

    this.dialogRef.close();


  }


  
  ngOnInit() {

    
    
    //storing the id
    this.reportDetails.studentID=this.getBservice.getStudentInfo()[0];

    //storing the name
    this.varActualname = this.getBservice.getStudentInfo()[1];

    //storing the token number
    this.varTokenNumber = this.getBservice.getStudentInfo()[2];
    
    // console.log(this.reportDetails.studentID);
    this.varName=this.varActualname;
    console.log(this.varName);
  }

}
