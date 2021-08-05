import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-notification-label',
  templateUrl: './notification-label.component.html',
  styleUrls: ['./notification-label.component.css']
})
export class NotificationLabelComponent implements OnInit {
  subscription: Subscription;
  notificationValue: number = 0;


  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
      .readWins()
      .subscribe(draws => this.notificationValue = draws.length)
  }

  ngOnInit(): void {
  }

}
