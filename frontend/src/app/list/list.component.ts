import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  private httpService = inject(HttpService);

  public draws$ = this.httpService.getLatestDraws();
  public arr = new Array(42); //Depends on game type

  //Tak zdecydowanie być nie może, samych wywołanie będzie 840, a w przypadku wyrenderowania wyszło 3191!!!
  //Więc zdecydowanie trzeba to ograniczyć
  //Za każdym odświeżeniem funkcja wywołuje się 3191 razy = paskudnie ;)
  public checkNumber(number: number, numbers: any): boolean {
    return Object.values(numbers).includes(number);
  }
}
