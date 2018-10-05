import { Component, OnInit } from '@angular/core';
import { FetchDoctorsService } from '../booking/fetch-doctors.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit
{
  varAllDoctors;
  //innitializing the service instance in the constructor
  constructor(private fetchService:FetchDoctorsService){ 
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

}
