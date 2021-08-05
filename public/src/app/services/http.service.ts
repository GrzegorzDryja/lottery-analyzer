import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Draw } from 'src/models/Draw.model'
import { Lots } from 'src/models/Lots.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string = 'http://localhost:8000/check/'

  constructor(private http: HttpClient) {}

  loadDraws(): Observable<Draw[]> {
    return this.http.get<Draw[]>('http://localhost:8000/draws');
  };

  checkDraw(lots: Lots): Observable<Draw[]> {
    const lotsWithoutZeros: string = this.removeZeros(lots);
    return this.http.get<Draw[]>(`${this.url}${lotsWithoutZeros}`);
  }

  removeZeros(lots: Lots): string {
    const lotsArray: number[] = Object.values(lots);
    let returnString: string = '';

    lotsArray.forEach(lot => {
      if(lot !== 0){
        returnString = returnString.concat(lot.toString() + ',');
      }        
    });

    return returnString.slice(0, -1);
  }
}
