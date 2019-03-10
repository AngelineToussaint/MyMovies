import {Genre} from './genre';

export class Movie {
  id: number;
  genres: Genre[];
  overview: string;
  title: string;
  poster_path: string;
}
