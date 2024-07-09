import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseHttpService } from './base-http.service';
import { Deep, MultiMulitResult } from '../models/draws.model';

@Injectable({
    providedIn: 'root'
})
export class HttpService extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }

  public getLatestDraws(): Observable<MultiMulitResult[]> {
    const request = this.http.get<MultiMulitResult[]>(`${HttpService.API_URL}/draws?limit=42`);

    return this.handleRequest<MultiMulitResult[]>(request);
  }

  public checkDeep(numbers: number[]): Observable<Deep> {
    const request = this.http.get<Deep>(`${HttpService.API_URL}/checkDeep/${ numbers }`);

    return this.handleRequest<Deep>(request);
  }
}
