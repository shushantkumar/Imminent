import { Injectable } from '@angular/core';

@Injectable()
export class BroadcastService {

  private studentInfo: string;
  private studentName: string;
  private token : string;

  constructor() {
    this.studentInfo="";
    this.studentName = "";
    this.token="";
   }

   public setStudentInfo(val: string,name: string, token: string):void{
     this.studentInfo = val;
     this.studentName = name;
     this.token = token;
   }
   public getStudentInfo():string{
     return this.studentInfo;
   }

}
