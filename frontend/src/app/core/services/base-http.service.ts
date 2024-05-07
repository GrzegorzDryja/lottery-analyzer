import { HttpParameterCodec, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const enum ErrorTypes {
  HTTP_ERROR = 'HTTP_ERROR',
}

export class BaseHttpService {
  static API_URL = 'http://localhost:8000';

  public handleError(err: Error): Observable<never> {
    Object.assign(err, { type: ErrorTypes.HTTP_ERROR });
    return throwError(() => err);
  }

  public handleRequest<T>(requestObservable: Observable<T>): Observable<T> {
    return requestObservable.pipe(catchError((err) => this.handleError(err)));
  }
}
