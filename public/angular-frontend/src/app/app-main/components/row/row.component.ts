import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {  

  constructor() {
    this.makeDivs();
  };

  makeDivs(): void {
    let row = document.getElementsByClassName("row");
    console.log(row);

    for(let i=0; i<80; i++){
      let square = document.createElement("div");
          square.className = "square";     
      row[0].appendChild(square);    
    };
  };

  ngOnInit(): void {
  };
}
