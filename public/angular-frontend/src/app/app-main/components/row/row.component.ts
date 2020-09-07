import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {  

  constructor() {
    this.makeDivs();
  };

  makeDivs(): void {
    let row = document.getElementById('main-row');
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
