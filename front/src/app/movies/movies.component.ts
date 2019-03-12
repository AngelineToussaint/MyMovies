import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie/movie';
import {MovieService} from '../movie/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

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
