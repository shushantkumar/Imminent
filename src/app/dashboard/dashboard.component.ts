import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as Chartist from 'chartist';
import { HistoryService } from '../table-list/history.service';
// import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { CurrententryService } from '../appointmententry/currententry.service';
import { GamesService } from '../games/games.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allHistory;
  allbooked;
  userdetails;
  Badminton;
  TableTennis;
  LawnTennis;
  VolleyBall;
  constructor(private cookieService: CookieService,private allrequestsService:HistoryService,private currservice: CurrententryService,private gameservice : GamesService) { }

  getAllHistory(){
    console.log("Something is going on!");
    this.allrequestsService.getAllHistory().subscribe(
      (res) =>{
          // console.log(res.orders);
          let response = res.visit;
          console.log(response);
          this.allHistory=response;
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );

  }

  getBooked(){
    let data = this.cookieService.get( 'ENVuserID');
    this.currservice.StudentAppointment(data).subscribe(
      (res) =>{
          console.log(res);
          let response = res.pending;
          console.log(response);
          this.allbooked=response;
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );

  }

  getUserDetails(){
    this.allrequestsService.getUserDetails().subscribe(
      (res) =>{
          // console.log(res.orders);
          let response = res.user;
          console.log(response);
          this.userdetails=response;
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );
  }

  GetSpecificEvent(data,urk){
    this.gameservice.GetSpecificEvent(data,urk)
      .subscribe(
        (response) => {
        console.log(response.court);
        let som = response.court;
        console.log("started");
        console.log(som);
        let n = som.length;
        console.log(n);
        var i;
        if(urk=="Badminton"){
          this.Badminton = som;
        }
        if(urk=="TableTennis"){
          this.TableTennis = som;
        }
        if(urk=="LawnTennis"){
          this.LawnTennis = som;
        }
        if(urk=="VolleyBall"){
          this.VolleyBall = som;
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

  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
    this.getAllHistory();
    this.getBooked();
    this.getUserDetails();
    this.GetSpecificEvent(this.cookieService.get('ENVuserID'),"Badminton");
    this.GetSpecificEvent(this.cookieService.get('ENVuserID'),"TableTennis");
    this.GetSpecificEvent(this.cookieService.get('ENVuserID'),"LawnTennis");
    this.GetSpecificEvent(this.cookieService.get('ENVuserID'),"VolleyBall");

      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
  }

}
