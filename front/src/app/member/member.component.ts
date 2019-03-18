import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../user/user';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../environments/environment';
import {Movie} from '../movie/movie';
import {MovieService} from '../movie/movie.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  user: User;
  moviesViews: Movie[] = [];
  playlist: Movie[] = [];
  notes: Movie[] = [];
  pictureUrl: string = environment.pictureUrl;

  constructor(
    private userService: UserService,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.get(id)
      .subscribe(user => {
        this.user = user;

        for (const i of user.movieViews) {
          this.getMovie(i.idMovie, 'movieView');
        }

        for (const i of user.playlist) {
          this.getMovie(i.idMovie, 'playlist');
        }

        for (const i of user.note) {
          this.getMovie(i.idMovie, 'note');
        }
      });
  }

  getMovie(id: number, type: string): void {
    this.movieService.get(id)
      .subscribe(movie => {
        if (type === 'movieView') {
          this.moviesViews.push(movie);
        } else if (type === 'playlist') {
          this.playlist.push(movie);
        } else if (type === 'note') {
          this.notes.push(movie);
        }
      });
  }

}
