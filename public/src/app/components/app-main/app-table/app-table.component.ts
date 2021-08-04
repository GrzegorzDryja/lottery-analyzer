import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './app-table.component.html',
    styleUrls: ['./app-table.component.css']
})
export class TableComponent implements OnInit {
  @Input() headers: string[];
  @Input() arrayOfDrawnNumbers: any;

  constructor() {
  }

  ngOnInit(): void {
    }
}
