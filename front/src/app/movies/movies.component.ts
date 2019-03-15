import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie/movie';
import {MovieService} from '../movie/movie.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  movies: Movie[];
  pictureUrl: string = environment.pictureUrl;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  getMovies(search: string): void {
    this.movieService.getBySearch(search)
      .subscribe(res => {
        this.movies = res.results;
      });
  }
}
