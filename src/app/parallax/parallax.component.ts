import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

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
    
  }
  d;
  i;
  changeBackGround(){
    
    setTimeout(()=>{
      console.log(this.i);
      document.getElementById('backgro').style.background=this.d[this.i];
      this.i = (this.i+1)%3;
    this.changeBackGround();
    },3000) 
    
   }
  
 

  ngOnInit() {
    this.changeBackGround();
  }
   


}
