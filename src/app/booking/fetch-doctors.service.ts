import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { CookieService } from 'ngx-cookie-service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FetchDoctorsService {

  private serverURL ='http://winter-is-comming.herokuapp.com/doctors';

  constructor(private http:HttpClient,private cookieService: CookieService) { }

  private extractData(res: Response) {
    return res;
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
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


  getAllDoctors(){
    //console.log("33");
    //let token = this.cookieService.get('ENVuserID');
    //let specificUrl = this.serverURL + '/visits/'+token;

    //fetches details of all the doctors
    return this.http.get(this.serverURL)
    .map(this.extractData)
    .catch(this.handleError);
  }

}
