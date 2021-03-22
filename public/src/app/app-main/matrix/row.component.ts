import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {  
  lastDraw = ['2',	'9',	'11',	'17',	'18',	'19',	'22',	'27',	'29',	'32',	'38',	'45',	'46',	'47',	'50',	'60',	'67',	'68',	'76',	'78'];
  
  constructor() {
    };
  
  ngOnInit(): void {
    this.makeDivs();
  };

  makeDivs(): void {
    let row = document.getElementById('main-row');   

    for(let i=1; i<81; i++){
      let square = document.createElement("div");
          square.className = "col-xs-1 square";
          square.innerHTML = i.toString();   
    if(this.lastDraw.includes(`${i}`) === true){
      square.classList.add("win");
    };     
      row.appendChild(square); 
    };
  }
}
