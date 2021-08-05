import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-notification-label',
  templateUrl: './notification-label.component.html',
  styleUrls: ['./notification-label.component.css']
})
export class NotificationLabelComponent implements OnInit {
@Input() notificationValue: number = 0;


  constructor() {}

  ngOnInit(): void {
  }

}
