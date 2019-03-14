import { Component, OnInit } from '@angular/core';
import {CommentService} from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.commentService.getByMovieId(128)
      .subscribe(comments => this.comments = comments.slice().reverse());
  }

  addComment(comment: string) {
    this.commentService.addComment(128, comment)
      .subscribe(resComment => {
        this.comments.unshift(resComment);
      });
  }
}
