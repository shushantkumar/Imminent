import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    document.getElementById('hcc').style.backgroundColor="#e53935";
    document.getElementById('hcc').style.color="white";
    //document.getElementById('hcc').children.style.color="white";
    
  }

}
