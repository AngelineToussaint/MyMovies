import { Component, OnInit } from '@angular/core';
import {Note} from '../movie/note';
import {NoteService} from '../movie/note.service';
import {MovieService} from '../movie/movie.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  notes: Note[] = [];
  pictureUrl: string = environment.pictureUrl;

  constructor(
    private noteService: NoteService,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getLastNotes();
  }

  getLastNotes(): void {
    this.noteService.getLast()
      .subscribe(notes => {
        for (const note of notes) {
          this.getMovie(note);
        }
      });
  }

  getMovie(note: Note): void {
    this.movieService.get(note.idMovie)
      .subscribe(movie => {
        note.movie = movie;

        this.notes.push(note);
      });
  }

}
