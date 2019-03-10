import {MovieView} from '../movie/movieView';
import {Playlist} from '../movie/playlist';
import {Note} from '../movie/note';

export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  movieViews: MovieView[];
  playlist: Playlist[];
  note: Note[];
}
