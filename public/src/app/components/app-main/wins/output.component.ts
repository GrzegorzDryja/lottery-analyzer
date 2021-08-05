import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  subscription: Subscription;
  winHeaders: string[];
  winNumbers: any = [];


  constructor(private ui: UiService) {
    this.subscription = this.ui
      .readWins()
      .subscribe(draws => {
        this.winHeaders = Object.keys(draws[0]);
        draws.forEach(draw => this.winNumbers.push(Object.values(draw)));
      })
  }

  ngOnInit(): void {}

}
