import {User} from '../user/user';

export class Comment {
  id: number;
  content: string;
  user: User;
  idMovie: number;
}
