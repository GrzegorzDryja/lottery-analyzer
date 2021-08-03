import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lots } from 'src/models/Lots.model';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private url: string = 'http://localhost:8000/check/'

  constructor(private http: HttpClient) {}


  checkDraw(lots: Lots): Observable<any> {
    return this.http.get<any>(`${this.url}${lots.number0},${lots.number1},${lots.number2},${lots.number3},${lots.number4}`);
  }
}
