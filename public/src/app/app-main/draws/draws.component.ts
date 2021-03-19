import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'draws',
    templateUrl: './draws.component.html',
    styleUrls: ['./draws.component.css']
})
export class DrawsComponent implements OnInit {
  headers: any[];
  arrayOfDraws: any[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadDraws();
  }

  loadDraws() {
    return this.http
      .get('http://localhost:8000/draws') //Make this as a service DI
      .subscribe(draws => {
        this.headers = Object.keys(draws[19])
        this.arrayOfDraws = Object.values(draws[19]);
      });
  };
}
