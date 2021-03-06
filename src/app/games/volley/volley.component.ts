import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { parseCookieValue } from '@angular/common/src/cookie';
import {Router} from '@angular/router';


@Component({
  selector: 'app-volley',
  templateUrl: './volley.component.html',
  styleUrls: ['./volley.component.scss']
})
export class VolleyComponent implements OnInit {
  alldata;
  constructor(
    private gameservice : GamesService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("init");
    this.alldata = new Array(8);
    var j;
    for(j=0;j<8;j++){
      this.alldata[j]=0;
    }
    this.GetAllEvent("VolleyBall");
    this.GetSpecificEvent(this.cookieService.get('ENVuserID'));
  }

  GetAllEvent(ev){
        
    this.gameservice.GetAllEvent(ev)
      .subscribe(
        (response) => {
        console.log(response.court);
        let som = response.court;
        console.log("started");
        console.log(som);
        let n = som.length;
        console.log(n);
        var i;
        for(i=0;i<n;i++){
          this.alldata[som[i].timeslot-1] = som[i].courtBooked;
        }
        // this.alldata[2]=2;
        for(i=0;i<8;i++){
          if(this.alldata[i]>=2){
            var j =i +1;
            (<HTMLInputElement> document.getElementById("ba"+j)).disabled = true;
          }
        }
        // this.router.navigate(['dashboard']);
        
      },
      (err) =>{
            console.log("error maadi");
      },
      () => {console.log('done!');

    }
    );
  }

  GetSpecificEvent(data){
    this.gameservice.GetSpecificEvent(data,"VolleyBall")
      .subscribe(
        (response) => {
        console.log(response.court);
        let som = response.court;
        console.log("started");
        console.log(som);
        let n = som.length;
        console.log(n);
        var i;

        if(n>0){
          for(i=0;i<8;i++){
            var j =i +1;
            (<HTMLInputElement> document.getElementById("ba"+j)).disabled = true;

          }
        }

        // this.router.navigate(['dashboard']);
        
      },
      (err) =>{
            console.log("error maadi");
      },
      () => {console.log('done!');

    }
    );
  }

  BookEvent(dat){
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = currentDate.getMonth(); 
    let data={
      "courtName":"VolleyBall",
      "day":date,
      "month":month,
      "studentID":this.cookieService.get('ENVuserID'),
      "timeslot":dat
    };


    
    this.gameservice.BookEvent(data)
      .subscribe(
        (response) => {
        console.log(response);

        this.router.navigate(['dashboard']);
        
      },
      (err) =>{
            console.log("error maadi");
      },
      () => {console.log('done!');

    }
    );
  }

}

