import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
faAngular = faAngular;

  constructor() { }

  ngOnInit(): void {
  }

}
