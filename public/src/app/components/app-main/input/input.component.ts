import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service'
import { Lots } from 'src/models/Lots.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class AppMainInputComponent implements OnInit {
  lots: Lots = {
    number0: 0,
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
    number5: 0,
    number6: 0,
    number7: 0,
    number8: 0,
    number9: 0
  }
  
  constructor(private http: HttpService) {}

  ngOnInit() {
  }

  checkDraws(){
    this.http
      .checkDraw(this.lots)
      .subscribe(response => console.log(response))
  }
}
