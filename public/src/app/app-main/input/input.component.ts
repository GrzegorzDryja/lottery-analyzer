import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Draw } from '../../../models/draw';

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
  userNumbers= "check/";

  @Output() numbersChecked = new EventEmitter<[Draw]>();//This is great place to use model from backend, it's bad to use empty object

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.checkDraws
  }

  // matchDiv(number: string){
  //   let row = document.getElementById('main-row');
  //   console.log(row);
  // }

  checkDraws(){
    if(this.nr1){
      this.userNumbers += this.nr1 + ",";
    }
    if(this.nr2){
      this.userNumbers += this.nr2 + ",";
    }
    if(this.nr3){
      this.userNumbers += this.nr3 + ",";
    }
    if(this.nr4){
      this.userNumbers += this.nr4 + ",";
    }
    if(this.nr5){
      this.userNumbers += this.nr5 + ",";
    }
    if(this.nr6){
      this.userNumbers += this.nr6 + ",";
    }
    if(this.nr7){
      this.userNumbers += this.nr7 + ",";
    }
    if(this.nr8){
      this.userNumbers += this.nr8 + ",";
    }
    if(this.nr9){
      this.userNumbers += this.nr9 + ",";
    }
    if(this.nr10){
      this.userNumbers += this.nr10 + ",";
    }

    this.userNumbers = this.userNumbers.substring(0, this.userNumbers.length-1);
console.log(`http://localhost:8000/${this.userNumbers}`);
    return this.http
      .get(`http://localhost:8000/${this.userNumbers}`)
      .subscribe(responseData => {
        this.numbersChecked.emit(<[Draw]>responseData);
      })
  }

  saveNumbers(){
    console.log("Saved")
  }  
}
