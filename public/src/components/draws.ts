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
        const seciton = document.createElement("section");
        seciton.innerHTML = `Losowanie nr: ${draw.Numer}, z dnia ${draw.Dzien}.${draw.Miesiac}.${draw.Rok}r.`;          
        // const row = new Row([])
        const x = document.createElement("div");
              x.className = "row"; 

          for(let i=0; i<80; i++){
            const y = document.createElement("div");
                  y.className = "square";
            x.appendChild(y);
          }

        // [draw.L1,draw.L2,draw.L3,draw.L4,draw.L5,draw.L6,draw.L7,draw.L8,draw.L9,draw.L10,draw.L11,draw.L12,draw.L13,draw.L14,draw.L15,draw.L16,draw.L17,draw.L18,draw.L19,draw.L20]
        // console.log(row);
          
        seciton.appendChild(x)
        hostElement.appendChild(seciton);
        
      });
    });
  }
}
