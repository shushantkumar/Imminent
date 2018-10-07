import { Injectable } from '@angular/core';

@Injectable()
export class BroadcastService {

  //private studentInfo: string;
  //private studentName: string;
  //private token : string;

  private val;
  constructor() {
    //this.studentInfo="";
    //this.studentName = "";
    //this.token="";
    this.val=[];
   }

   public setStudentInfo(val):void{
     //this.studentInfo = val[0];
     //this.studentName = val[1];
     //this.token = val[2];
     this.val=val;
   }
   public getStudentInfo():string{
     return this.val;
   }

}
