/// <reference lib="dom" />

export class Row {

  constructor(draws: string[]){
    this.makeDivs();
  }

  makeDivs() {
    const x = document.createElement("div");
            x.className = "row"; 
    for(let i=0; i<80; i++){
      const y = document.createElement("div");
            y.id = "box";
            y.className = "square";
      x.appendChild(y);
    }
  return x;
  }
}
