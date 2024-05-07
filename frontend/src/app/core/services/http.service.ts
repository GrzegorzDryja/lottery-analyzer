import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseHttpService } from './base-http.service';
import { MultiMulitResult } from '../models/draws.model';

export enum Status {
  pending = 'pending',
  completed = 'completed'
}

export type DataType = {
 id: number,
 user_id: number,
 title: string,
 due_on: Date,
 status: Status
}

const URL = 'https://gorest.co.in/public/v2/todos'

@Injectable({
    providedIn: 'root'
})
export class HttpService extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }

  public getLatestDraws(): Observable<MultiMulitResult[]> {
    const request = this.http.get<MultiMulitResult[]>(`${HttpService.API_URL}/draws`);

    return this.handleRequest<MultiMulitResult[]>(request);
  }

  public getRecords(): Observable<DataType[]> {
    return this.http.get<DataType[]>(URL)
  }
}
