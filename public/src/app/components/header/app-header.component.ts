import { Component, OnInit } from '@angular/core';
import { faTrophy, faChartBar } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  faTrophy = faTrophy;
  faChartBar = faChartBar;

  constructor() { }

  ngOnInit(): void {
  }

}
