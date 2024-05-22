import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseHttpService } from './base-http.service';
import { MultiMulitResult } from '../models/draws.model';

@Injectable({
    providedIn: 'root'
})
export class HttpService extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }

  public getLatestDraws(): Observable<MultiMulitResult[]> {
    const request = this.http.get<MultiMulitResult[]>(`${HttpService.API_URL}/draws?limit=30`);

    return this.handleRequest<MultiMulitResult[]>(request);
  }
}
