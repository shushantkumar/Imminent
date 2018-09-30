import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('hcc').style.backgroundColor="#e53935";
    document.getElementById('hcc').style.color="white";
  }

  
}
