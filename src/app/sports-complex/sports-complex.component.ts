import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports-complex',
  templateUrl: './sports-complex.component.html',
  styleUrls: ['./sports-complex.component.scss']
})
export class SportsComplexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("from sports complex icon");
  }

}
