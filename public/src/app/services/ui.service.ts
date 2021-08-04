import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Draw } from 'src/models/Draw.model';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private draws: Draw[];
  private subject = new Subject<Draw[]>();

  constructor() {}

  getDrawsResponse(draws: Draw[]): void{
    this.draws = draws;
    this.subject.next(this.draws);
  }

  readWins(): Observable<Draw[]> {
    return this.subject.asObservable();
  }

}
