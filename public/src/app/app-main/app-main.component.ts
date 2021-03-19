import { Component, OnInit } from '@angular/core';
import { Draw } from '../../models/draw';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit {
  winsArray = ["wins"];

  constructor() { }

  ngOnInit(): void {
  }

  showWins(wins: [Draw]){
    this.winsArray.push(wins[0].Numer)
  }
}
