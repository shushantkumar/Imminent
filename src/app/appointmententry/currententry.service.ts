import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class CurrententryService {
  private serverURL ='http://winter-is-comming.herokuapp.com/pendings/';

  constructor(private http:HttpClient) { }

  private extractData(res: Response) {
    return res;
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


  CreateAppointment(data){
    
    let specificUrl = this.serverURL ;
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};

    console.log(data);

    return this.http.post(specificUrl,data, headers)
    .map(this.extractData)
    .catch(this.handleError);
  }

  DoctorAppointment(data){
    let specificUrl = this.serverURL + data;
    return this.http.get(specificUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

  ReceptionAppointment(){
    let specificUrl = this.serverURL;
    return this.http.get(specificUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

  StudentAppointment(data){
    let specificUrl = this.serverURL+'s/'+data;
    return this.http.get(specificUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }  

  ReceptionApproved(){
    let specificUrl = this.serverURL+'0/';
    return this.http.get(specificUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

  PatchAppointment(data,appID){
    let specificUrl=this.serverURL+appID;
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.patch(specificUrl,data,headers)
    .map(this.extractData)
    .catch(this.handleError);
  }

    DeleteAppointment(data){
      let specificUrl = this.serverURL+data;
      let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};
      return this.http.delete(specificUrl,headers)
      .map(this.extractData)
      .catch(this.handleError);
    }

}
