import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private ref = '/comments';

  constructor(private http: HttpClient) { }

  getByMovieId(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(environment.apiUrl + this.ref + '/movies/' + id)
      .pipe(
        tap(_ => console.log('fetched comments by movie id')),
        catchError(this.handleError([]))
      );
  }

  addComment(id: number, comment: string): Observable<Comment> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Auth-Token': localStorage.getItem('token').toString()
      })
    };

    const body = new HttpParams()
      .set('id_movie', id.toString())
      .set('comment', comment);

    return this.http.post<Comment>(environment.apiUrl + '/users/' + localStorage.getItem('user_id') + this.ref, body.toString(), httpOptions)
      .pipe(
        tap(_ => console.log('added note')),
        catchError(this.handleError<Comment>())
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
