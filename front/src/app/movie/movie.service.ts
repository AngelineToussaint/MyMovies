import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Movie} from './movie';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private queryParams = '?api_key=' + environment.apiTMDBToken + '&language=fr-FR';

  constructor(private http: HttpClient) { }

  getBySearch(search: string): Observable<any> {
    return this.http.get<any>(environment.apiTMDBUrl + '/search/movie' + this.queryParams + '&query=' + search)
      .pipe(
        tap(_ => console.log('fetched movies')),
        catchError(this.handleError([]))
      );
  }

  get(id: number): Observable<Movie> {
    return this.http.get<Movie>(environment.apiTMDBUrl + '/movie/' + id + this.queryParams)
      .pipe(
        tap(_ => console.log('fetched movie')),
        catchError(this.handleError<Movie>())
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
