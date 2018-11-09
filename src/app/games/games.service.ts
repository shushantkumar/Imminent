import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class GamesService {
  private serverURL ='http://winter-is-comming.herokuapp.com/court/';

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

  BookEvent(data){
    let specificUrl = this.serverURL;
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};

    console.log(data);

    return this.http.post(specificUrl,data, headers)
    .map(this.extractData)
    .catch(this.handleError);
  }

  GetAllEvent(data){
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = currentDate.getMonth(); 
    let specificUrl = this.serverURL + date+'/'+month+'/n/'+data +'/';
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};

    // console.log(data);
    return this.http.get(specificUrl, headers)
    .map(this.extractData)
    .catch(this.handleError);

  }

  GetSpecificEvent(data){
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = currentDate.getMonth(); 
    let specificUrl = this.serverURL + date+'/'+month+'/'+data +'/';
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};

    // console.log(data);
    return this.http.get(specificUrl, headers)
    .map(this.extractData)
    .catch(this.handleError);
    
  }
}
