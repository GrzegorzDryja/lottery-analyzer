import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { HttpService } from '../core/services/http.service';
import { CheckedWins, MultiMulitResult } from '../core/models/draws.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  private httpService = inject(HttpService);
  private checkedLots!: CheckedWins[];
  private _MultiMultiLimit = 80;
  private MiniLottoLimit = 42;

  draws$: Observable<MultiMulitResult[]> = this.httpService.getLatestDraws();
  gameLimit = new Array<number>(this.MiniLottoLimit);
  // _prediction: Set<number> = new Set(); //TODO sprawdzić tu sygnały
  // prediction = signal([...this._prediction])
  prediction: number[] = [];
  lots: number[][] = [];

  //Tak zdecydowanie być nie może, samych wywołanie będzie 840, a w przypadku wyrenderowania wyszło 3191!!!
  //Więc zdecydowanie trzeba to ograniczyć
  //Za każdym odświeżeniem funkcja wywołuje się 3191 razy = paskudnie ;)
  checkNumber(number: number, numbers: number[]): boolean {
    return Object.values(numbers).includes(number);
  }

  addPredictionNumber(number: number): void {
    this.prediction.push(number);
  }

  checkDeepAll(lots: number[][]): void {
    lots.forEach((lot) =>
      this.httpService.checkDeep(lot).subscribe((wins) => {
        this.checkedLots.push({ lot, ...wins });
      })
    );
  }
}
