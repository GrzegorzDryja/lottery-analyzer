import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {  

  constructor() {
  };

  makeDivs(): void {
    let row = document.getElementById('main-row');   

    for(let i=1; i<81; i++){
      let square = document.createElement("div");
          square.className = "col-xs-1 square";
          square.innerHTML = i.toString();     
      row.appendChild(square);    
    };
  };

  ngOnInit(): void {
    this.makeDivs();
  };
}
