/// <reference lib="dom" />
import { Draw } from "../models/draw.ts";
import { Row } from "../models/row.ts"

export default class LastDraws {
  constructor(){
    this.loadDraws();
  }

  private loadDraws() {
    return fetch("/draws")
    .then((drawsResponse) => drawsResponse.json())
    .then((draws) => {
      const hostElement = document.getElementById("host")!;
      draws.forEach((draw: Draw) => {
        const drawsToColour = [+draw.L1,+draw.L2,+draw.L3,+draw.L4,+draw.L5,+draw.L6,+draw.L7,+draw.L8,+draw.L9,+draw.L10,+draw.L11,+draw.L12,+draw.L13,+draw.L14,+draw.L15,+draw.L16,+draw.L17,+draw.L18,+draw.L19,+draw.L20];
        console.log(drawsToColour);
        const headerTeat = `Losowanie nr: ${draw.Numer}, z dnia ${draw.Dzien}.${draw.Miesiac}.${draw.Rok}r.`;          
        // const row = new Row([])
        const a = document.createElement("div");
              a.className = "row"; 
        const b = document.createElement("div");
              b.className = "header";
              b.innerHTML = headerTeat;
            a.appendChild(b);      

          for(let i=1; i<81; i++){
            const c = document.createElement("div");
                  c.className = "square";
            // if(drawsToColour.includes(i)){
            //   c.classList.add("win");
            // }      
            a.appendChild(c);
          }

        // console.log(row);
          
        hostElement.appendChild(a)               
      });
    });
  }
}
