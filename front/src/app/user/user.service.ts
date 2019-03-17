import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from './user';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Note} from '../note/note';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ref = '/users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + this.ref)
      .pipe(
        tap(_ => console.log('fetched users')),
        catchError(this.handleError([]))
      );
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(environment.apiUrl + this.ref + '/' + id)
      .pipe(
        tap(_ => console.log('fetched user')),
        catchError(this.handleError<User>())
      );
  }

  add(email: string, username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const body = new HttpParams()
      .set('email', email)
      .set('username', username)
      .set('password', password);

    return this.http.post<any>(environment.apiUrl + this.ref, body.toString(), httpOptions)
      .pipe(
        tap(_ => console.log('added user')),
        catchError(this.handleError<any>())
      );
  }

  check(email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const body = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.post<any>(environment.apiUrl + '/auth', body.toString(), httpOptions)
      .pipe(
        tap(_ => console.log('authentication')),
        catchError(this.handleError<any>())
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
