import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Draw } from '../../../models/Draw.model';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit {
  winsArray = ["wins"];
  headers: string[];
  arrayOfDrawnNumbers: string[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadDraws();
  }

  loadDraws() {
    return this.http
      .get('http://localhost:8000/draws') //Make this as a service DI
      .subscribe(draws => {
        this.headers = Object.keys(draws[19])
        this.arrayOfDrawnNumbers = Object.values(draws[19]);
      });
  };
  showWins(wins: [Draw]){
    this.winsArray.push(wins[0].Numer)
  }
}
