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

  private counter = 0;
  private from25042024 = new Set([
    4, 12, 18, 27, 40, 3, 10, 18, 24, 25, 2, 12, 21, 34, 40, 3, 8, 10, 16, 28, 22, 28, 31, 37, 41, 3, 10, 21, 29, 40, 7, 13, 21, 29, 40,
  ]);
  private from26042024 = new Set([
    4, 5, 10, 12, 16, 17, 18, 23, 27, 28, 29, 30, 35, 37, 40, 4, 16, 27, 37, 40, 4, 16, 17, 2, 8, 17, 31, 41,
  ]);
  private from27042024 = new Set([
    3, 17, 23, 29, 30, 3, 23, 27, 37, 41, 3, 21, 31, 32, 41, 3, 16, 31, 32, 42, 3, 31, 32, 37, 40, 3, 31, 32, 37, 42,
  ]);
  private from28042024 = new Set([8, 18, 21, 27, 28, 33, 40]);
  private from30042024 = new Set([6, 8, 11, 21, 17, 27, 28, 30, 35, 40]);
  private from06052024 = new Set([1, 5, 7, 10, 11, 15, 26, 28, 29, 30, 31, 32, 39, 40, 42]);
  private from07052024 = new Set([7, 17, 38, 39, 13, 29, 30, 42, 28, 18]);
  private from08052024 = new Set([3, 7, 18, 19, 27, 28, 29, 32, 34, 38, 41, 42, 5, 18, 19, 29, 39, 6, 15, 28, 29, 30]); //I więcej z weny, jak wygram to wygram, jak nie wygram to nie wygram i tyle :) Szczęściu trzeba pomagać i "Jebać biedę"
  private from09052024 = new Set([5, 12, 26, 34, 40]); //I więcej z weny, jak wygram to wygram, jak nie wygram to nie wygram i tyle :) Szczęściu trzeba pomagać i "Jebać biedę"
  private from12052024 = new Set([5, 7, 15, 18, 19, 26, 27, 28, 29, 30, 31, 37, 40]);
  private from13052024 = new Set([
    15, 17, 28, 29, 31, 7, 19, 26, 29, 37, 5, 18, 19, 37, 40, 27, 28, 29, 32, 37, 7, 19, 29, 31, 40, 7, 19, 26, 31, 37, 5, 7, 18, 39, 40, 5,
    28, 29, 30, 40, 7, 18, 26, 27, 30, 7, 18, 19, 30, 41,
  ]);

  private from14052024 = new Set([
    15, 17, 28, 29, 31, 7, 19, 26, 29, 37, 5, 18, 19, 37, 40, 27, 28, 29, 32, 37, 7, 19, 29, 31, 40, 7, 19, 26, 31, 37, 5, 7, 18, 39, 40, 5,
    28, 29, 30, 40, 7, 18, 26, 27, 30, 7, 18, 19, 30, 41,
  ]);

  private from21052024 = new Set([
    1, 9, 21, 32, 9, 22, 31, 39, 9, 18, 28, 33, 39, 26, 29, 33, 39, 40, 28, 29, 35, 36, 37, 28, 33, 36, 39, 30, 38,
  ]);

  public draws$ = this.httpService.getLatestDraws();
  public arr = new Array(42); //Depends on game type

  public newSet = [...this.from25042024];
  public newSet2 = [...this.from26042024];
  public newSet3 = [...this.from27042024];
  public newSet4 = [...this.from28042024];
  public newSet5 = [...this.from30042024];
  public newSet6 = [...this.from06052024];
  public newSet7 = [...this.from07052024];
  public newSet8 = [...this.from08052024];
  public newSet9 = [...this.from09052024];
  public newSet10 = [...this.from12052024];
  public newSet11 = [...this.from13052024];
  public newSet12 = [...this.from21052024];

  //Tak zdecydowanie być nie może, samych wywołanie będzie 840, a w przypadku wyrenderowania wyszło 3191!!!
  //Więc zdecydowanie trzeba to ograniczyć
  //Za każdym odświeżeniem funkcja wywołuje się 3191 razy = paskudnie ;)
  public checkNumber(number: number, numbers: any): boolean {
    console.log(this.counter++);
    return Object.values(numbers).includes(number);
  }
}
