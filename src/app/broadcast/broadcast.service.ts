import { Injectable } from '@angular/core';

@Injectable()
export class BroadcastService {

  private studentInfo: string;
  constructor() {
    this.studentInfo="";
   }

   public setStudentInfo(val: string):void{
     this.studentInfo=val;
   }
   public getStudentInfo():string{
     return this.studentInfo;
   }

}
