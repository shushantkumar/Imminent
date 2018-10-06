import { Component, OnInit } from '@angular/core';
import { FetchDoctorsService } from '../booking/fetch-doctors.service';
import { CurrententryService } from '../appointmententry/currententry.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit
{
  varAllDoctors;
  //innitializing the service instance in the constructor
  constructor(
    private fetchService:FetchDoctorsService,private currService:CurrententryService,
    private cookieService: CookieService,
    ){ 
  }

  ngOnInit() {
    this.getAllDoctors();
    document.getElementById('hcc').style.backgroundColor="#e53935";
    document.getElementById('hcc').style.color="white";
    //calling getAllDoctors during the initialization of the component
    
    //document.getElementById('hcc').children.style.color="white";
    
  }

  //this is the method that front end calls to access the service to fetch all the doctors
  getAllDoctors()
  {
    console.log("Something is going on!");
    this.fetchService.getAllDoctors().subscribe(
      (res) =>{
          let response = res;
          console.log(response);
          //storing the fetched contends into the response object
          
          this.varAllDoctors=response;
        }, 
      (err) => console.log(err),
      () => console.log('done!')
    );
  }

  bookAppoint(dat){
    let docID = dat._id;
    let flag = "-1";
    let sID = this.cookieService.get('ENVuserID');
    let data = {
      "doctorID":docID,
      "flag":flag,
      "studentID":sID
    };
    console.log("started booking");
    // console.log(data);
    this.currService.CreateAppointment(data)
    .subscribe(
      (response) => {
      console.log(response);

      // this.router.navigate(['dashboard']);
      
    },
    (err) =>{
          console.log("error maadi");
          console.log(err);
    },
    () => {console.log('done!');

  }
  );

  }


}
