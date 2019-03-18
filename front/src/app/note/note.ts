import {User} from '../user/user';
import {Movie} from '../movie/movie';

export class Note {
  id: number;
  user: User;
  idMovie: number;
  movie: Movie;
  note: number;
}
