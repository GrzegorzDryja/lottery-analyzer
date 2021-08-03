import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private url: string = 'http://localhost:8000/check/'

  constructor(private http: HttpClient) {}


  checkDraws(num0, num1, num2, num3, num4): Observable<any> {
    return this.http.get<any>(`${this.url}${num0},${num1},${num2},${num3},${num4}`);
  }
}
