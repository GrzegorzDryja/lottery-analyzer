import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../../services/http-service.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class AppMainInputComponent implements OnInit {

  num0: string = "0";
  num1: string = "0";
  num2: string = "0";
  num3: string = "0";
  num4: string = "0";
  num5: string = "0";
  num6: string = "0";
  num7: string = "0";
  num8: string = "0";
  num9: string = "0";

  constructor(private http: HttpServiceService) {}

  ngOnInit() {
  }

  checkDraws(){
    this.http.checkDraws(this.num0, this.num1, this.num2, this.num3, this.num4).subscribe((response) => console.log(response))
  }
}
