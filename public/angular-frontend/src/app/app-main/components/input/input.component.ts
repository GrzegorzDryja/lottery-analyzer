import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class AppMainInputComponent implements OnInit {
  userData;

  constructor() {}

  ngOnInit(): void {
  }

  checkDraws(userData: string){      
    return fetch(`http://localhost:8000/draws/${userData}`)      
  }
}
