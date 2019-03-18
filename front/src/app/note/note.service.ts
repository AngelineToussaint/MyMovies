import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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

  add(id: number, note: number): Observable<Note> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Auth-Token': localStorage.getItem('token').toString()
      })
    };

    const body = new HttpParams()
      .set('id_movie', id.toString())
      .set('note', note.toString());

    return this.http.post<Note>(environment.apiUrl + '/users/' + localStorage.getItem('user_id') + this.ref, body.toString(), httpOptions)
      .pipe(
        tap(_ => console.log('added note')),
        catchError(this.handleError<Note>())
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
