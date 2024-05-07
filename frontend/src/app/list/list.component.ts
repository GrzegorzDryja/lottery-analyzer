import { Component, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

import { HttpService, Status } from '../core/services/http.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HttpClientModule],
  template: `<
    <p></p>`,
})
export class ListComponent {
  private httpService = inject(HttpService);

  public $secondPendingRecord = this.httpService
    .getRecords()
    .pipe(map((records) => records[1]));

  // private counter = 0
  // private from25042024 = new Set([4,12,18,27,40,3,10,18,24,25,2,12,21,34,40,3,8,10,16,28,22,28,31,37,41,3,10,21,29,40,7,13,21,29,40])
  // private from26042024 = new Set([4,5,10,12,16,17,18,23,27,28,29,30,35,37,40,4,16,27,37,40,4,16,17,2,8,17,31,41])
  // private from27042024 = new Set([3,17,23,29,30,3,23,27,37,41,3,21,31,32,41,3,16,31,32,42,3,31,32,37,40,3,31,32,37,42])
  // private from28042024 = new Set([8,18,21,27,28,33,40])
  // private from30042024 = new Set([6,8,11,21,17,27,28,30,35,40])
  // private from06052024 = new Set([1,5,7,10,11,15,26,28,29,30,31,32,39,40,42])
  // // private toCountFifths = [4,12,17,23,35,37,40]

  // public draws$ = this.httpService.getLatestDraws()
  // public arr = new Array(42)

  // public newSet = [...this.from25042024]
  // public newSet2 = [...this.from26042024]
  // public newSet3 = [...this.from27042024]
  // public newSet4 = [...this.from28042024]
  // public newSet5 = [...this.from30042024]
  // public newSet6 = [...this.from06052024]

  //Tak zdecydowanie być nie może, samych wywołanie będzie 840, a w przypadku wyrenderowania wyszło 3191!!!
  //Więc zdecydowanie trzeba to ograniczyć
  //Za każdym odświeżeniem funkcja wywołuje się 3191 razy = paskudnie ;)
  // public checkNumber(number: number, numbers: any): boolean {
  //   console.log(this.counter++)
  //   return Object.values(numbers).includes(number)
  // }
}
