import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'draws',
    templateUrl: './draws.component.html',
    styleUrls: ['./draws.component.css']
})
export class DrawsComponent implements OnInit {
  @Input() headers: string[];
  @Input() arrayOfDrawnNumbers: string[];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.headers)
    }
}
