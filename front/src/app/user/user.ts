import {MovieView} from '../movie/movieView';
import {Playlist} from '../movie/playlist';
import {Note} from '../note/note';

export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  date: number;
  movieViews: MovieView[];
  playlist: Playlist[];
  note: Note[];
}
