import { Component, OnInit } from '@angular/core';
import * as comment from './comment.json';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  title: string = 'Comments';

  comments: any = (comment as any).default;
  constructor() {}

  ngOnInit(): void {
    console.log(comment);
  }
}
