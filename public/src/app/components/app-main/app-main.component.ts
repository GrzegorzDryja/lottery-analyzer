import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Draw } from 'src/models/Draw.model';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit {

  headers: string[];
  arrayOfDrawnNumbers: any = [];

  constructor(private http: HttpService) {}   

  ngOnInit(): void {
    this.http.loadDraws().subscribe((draws: Draw[]) => {
      this.headers = Object.keys(draws[0]);
      Object.values(draws)
        .forEach(draw => {
          this.arrayOfDrawnNumbers.push(Object.values(draw))
        })
    })
  }
}
