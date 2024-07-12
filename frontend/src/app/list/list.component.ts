import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { max, Observable } from 'rxjs';

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
  private _MultiMultiLimit = 80;
  private MiniLottoLimit = 42;
  
  gridWidth = new Array<number>(this.MiniLottoLimit);
  $checkedLots = signal<CheckedWins[]>([]);
  draws$: Observable<MultiMulitResult[]> = this.httpService.getLatestDraws();
  // _prediction: Set<number> = new Set(); //TODO sprawdzić tu sygnały
  // prediction = signal([...this._prediction])
  prediction: number[] = [];
  lots: number[][] = [];

  //TODO: Za każdym odświeżeniem funkcja wywołuje się wiele razy = trochę paskudnie ;)
  //Pomyśleć jak zastosować to mapperka
  checkNumber(number: number, numbers: number[]): boolean {
    return Object.values(numbers).includes(number);
  }

  addPredictionNumber(number: number): void {
    if (this.prediction.includes(number)) {
      this.prediction.splice(this.prediction.indexOf(number), 1);

      return;
    }
    this.prediction.push(number);
  }

  checkDeepAll(): void {
    //Ekstrakcja z  predykcji na kombinacje bez powtórzeń max 5
    // const a = this.generateCombinations(this.prediction, 5)
    this.lots.forEach((lot) =>
      this.httpService.checkDeep(lot).subscribe((wins) => {
        // this.checkedLots.set([{ lot, ...wins }]);
        //TODO: Przy update trzeba uważać - ponowne wywołanie funkcji doda duble do wyniku
        //Może guard czy lots się w ogóle zmienił czy coś takiego
        this.$checkedLots.update(lots => [...lots, { lot, ...wins }]);
      })
    );
  }

  private destructOneStepAbove(numbers: number[]): number[][] {
    const combinations: number[][] = [];
    numbers.forEach((_, index) => {
      combinations.push(numbers.toSpliced(index, 1));
    });
  
    return combinations;
  }

  private generateCombinations(numbers: number[], maxCount: number): number[][] {
    if(numbers.length > maxCount) {
      const a = this.destructOneStepAbove(numbers)

      return a.reduce((acc, curr) => {
        console.log({acc, curr})
        if (curr.length > maxCount) {
          return this.generateCombinations(curr, maxCount)
        }
        acc.push(curr)
        return acc
      }, [] as number[][])
    }

    return [numbers]
  }
}
