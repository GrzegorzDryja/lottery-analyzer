import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Draw } from 'src/models/Draw.model'

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  subscription: Subscription;
  draws: string[] = [];

  constructor(private ui: UiService) {
    this.subscription = this.ui
      .readWins()
      .subscribe(draws => draws.forEach(draw => this.draws.push(JSON.stringify(draw))))
  }

  ngOnInit(): void {}

}
