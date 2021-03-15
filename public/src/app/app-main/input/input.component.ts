import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class AppMainInputComponent implements OnInit {
  nr1: string;
  nr2: string;
  nr3: string;
  nr4: string;
  nr5: string;
  nr6: string;
  nr7: string;
  nr8: string;
  nr9: string;
  nr10: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.checkDraws
  }

  matchDiv(number: string){
    let row = document.getElementById('main-row');
    console.log(row);
  }

  checkDraws(){      
    // return fetch(`https://localhost:8000/draws/${nr1},${nr2},${nr3},${nr4},${nr5}`)
    //   .then((drawsResponse) => drawsResponse.json())
    //   .then((draws) =>{
    //     draws.forEach(element => {
    //       const wins = new OutputComponent();
    //       wins.outputWins(element)
    //     });
    //   })
    this.http
    .get(`http://localhost:8000/check/${this.nr1},${this.nr2},${this.nr3},${this.nr4},${this.nr5}`)
    .subscribe(responseData => {
      console.log(responseData);
    })

  }
}
