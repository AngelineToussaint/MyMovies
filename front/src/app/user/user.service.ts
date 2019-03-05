import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from './user';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ref = '/users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + this.ref)
      .pipe(
        tap(_ => console.log('fetched users')),
        catchError(this.handleError([]))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
