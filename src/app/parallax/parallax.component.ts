import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
// import TypeIt from 'typeit';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss','./ie.css','./loader.css','./normalize.css','./style.css']
})
export class ParallaxComponent implements OnInit {
  
  constructor() { 
    this.i = 1;
    this.d=["url('../../assets/images/Doctor.jpg') no-repeat 50% 100%",
    "url('../../assets/images/sport.png') no-repeat 50% 100%",
    "url('../../assets/images/party.jpg') no-repeat 50% 100%"
  ];

    this.e=[
      "NITK Health Care Center Automation",
      "NITK Sports Complex Automation",
      "NITK SAC & SJA Event Management"
  ];
    
  this.c=[
    "#4A148C",
    "#03A9F4",
    "#ffff66"
  ];
  }
  d;
  i;
  e;
  c;
  some;
  changeBackGround(){
    
    setTimeout(()=>{
      console.log(this.i);
      document.getElementById('backgro').style.background=this.d[this.i];
      document.getElementById('baset').innerHTML =this.e[this.i];
      document.getElementById('baset').style.color =this.c[this.i];
      this.i = (this.i+1)%3;
    this.changeBackGround();
    },3000) 
    
   }
  
 

  ngOnInit() {
    this.changeBackGround();
    // this.some = new TypeIt('#example2', {
    //   strings: ["This is a great string.", "But here is a better one."],
    //   speed: 50,
    //   breakLines: false,
    //   autoStart: false
    // });
  }



}
