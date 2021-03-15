/// <reference lib="dom" />
import { Component, OnInit } from '@angular/core';
import { Row } from '../../../models/row';
import { Draw } from "../../../models/draw";

@Component({
  selector: '[draws]',
  templateUrl: './draws.component.html',
  styleUrls: ['./draws.component.css']
})
export class DrawsComponent implements OnInit {

  constructor(){
    this.loadDraws();    
  }

  private loadDraws() {
    return fetch("http://localhost:8000/draws")
    .then((drawsResponse) => drawsResponse.json())
    .then((draws) => {
      const hostElement = document.getElementById("host")!;

      draws.forEach((draw: Draw) => {
        const drawsToColour = [
          draw.L1,
          draw.L2,
          draw.L3,
          draw.L4,
          draw.L5,
          draw.L6,
          draw.L7,
          draw.L8,
          draw.L9,
          draw.L10,
          draw.L11,
          draw.L12,
          draw.L13,
          draw.L14,
          draw.L15,
          draw.L16,
          draw.L17,
          draw.L18,
          draw.L19,
          draw.L20
        ];
        const headerText = `Draw no: ${draw.Numer}, date ${draw.Dzien}.${draw.Miesiac}.${draw.Rok}`;          

        const a = document.createElement("div");
              a.className = "row"; 
        const b = document.createElement("div");
              b.className = "col-xs-20 header";
              b.innerHTML = headerText;
            a.appendChild(b);      

          for(let i=1; i<81; i++){
            const c = document.createElement("div");
                  c.className = "col-xs-1 square";
            if(drawsToColour.includes(`${i}`) === true){
              c.classList.add("win");
            }      
            a.appendChild(c);
          }          
        hostElement.appendChild(a)         
      });
    });
  }

  ngOnInit(): void {}
}
