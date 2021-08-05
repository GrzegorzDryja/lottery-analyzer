import { Component, OnInit } from '@angular/core';
import { faTrophy, faChartBar } from '@fortawesome/free-solid-svg-icons'
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  faTrophy = faTrophy;
  faChartBar = faChartBar;
  notify: boolean = false;
  subscription: Subscription;
  notificationValue: number;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
      .readWins()
      .subscribe(draws => {
        this.notificationValue = draws.length;
        draws.length > 0 ? this.notify = true : this.notify = false
      })
  }

  ngOnInit(): void {
  }

}
