import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';
import { parseCookieValue } from '@angular/common/src/cookie';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.component.html',
  styleUrls: ['./tennis.component.scss']
})
export class TennisComponent implements OnInit {

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
    this.GetAllEvent("LawnTennis");
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
          console.log(this.alldata[som[i].timeslot]," g ",som[i].timeslot);
        }
        // this.alldata[3]=3;
        for(i=0;i<8;i++){
          if(this.alldata[i]>=3){
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
    this.gameservice.GetSpecificEvent(data,"LawnTennis")
      .subscribe(
        (response) => {
        // console.log(response.court);
        let som = response.court;
        // console.log("started");
        // console.log(som);
        let n = som.length;
        // console.log(n);
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
      "courtName":"LawnTennis",
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
