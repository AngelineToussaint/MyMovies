import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {MovieService} from './movie.service';
import {Movie} from './movie';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../environments/environment';
import {Note} from '../note/note';
import {NoteService} from '../note/note.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  pictureUrl: string = environment.pictureUrl;
  movie: Movie;
  notes: Note[];
  avgNote = 0;

  constructor(
    private movieService: MovieService,
    private noteService: NoteService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.get(id)
      .subscribe(movie => {
        this.movie = movie;

        this.noteService.getByMovieId(id)
          .subscribe(notes => {
            this.notes = notes;

            this.average();
          });
      });
  }

  average(): void {
    let sum = 0;
    for (const note of this.notes) {
      sum = sum + +note.note;
    }
    this.avgNote = (this.notes.length > 0) ? (sum / this.notes.length) : 0;
  }

  note(e): void {
    this.noteService.add(this.movie.id, e.value)
      .subscribe(note => {
        this.snackBar.open('Note enregistrée !', 'Ok !', {
          duration: 5000
        });

        this.notes.push(note);

        this.average();
      });
  }

}
