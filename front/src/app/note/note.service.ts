import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Note} from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private ref = '/notes';

  constructor(private http: HttpClient) { }

  getLast(): Observable<Note[]> {
    return this.http.get<Note[]>(environment.apiUrl + this.ref + '/last')
      .pipe(
        tap(_ => console.log('fetched notes')),
        catchError(this.handleError([]))
      );
  }

  getByMovieId(id: number): Observable<Note[]> {
    return this.http.get<Note[]>(environment.apiUrl + this.ref + '/movies/' + id)
      .pipe(
        tap(_ => console.log('fetched notes by movie id')),
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
