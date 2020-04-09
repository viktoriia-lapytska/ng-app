import { Component } from '@angular/core';
import {PostsModel} from '../models/PostsModel';
import {PostsService} from './services/posts.service';
import {CommentsModel} from '../models/CommentsModel';
import {CommentsService} from './services/comments.service';
import {UsersModel} from '../models/UsersModel';
import {UsersService} from './services/users.service';

@Component({
  selector: 'app-root',
  template: `<h1>hello</h1>
  <app-posts *ngFor="let post of posts" [post]="post"></app-posts>
  <app-comments *ngFor="let comment of comments" [comment]="comment"></app-comments>
  <app-user *ngFor="let user of users" [user]="user"></app-user>
  `,
  styles: [`h1 {
    background: silver
  }`]
})
export class AppComponent {
  users: UsersModel[];
  posts: PostsModel[];
  comments: CommentsModel[];
  constructor(private postsService: PostsService, private commentsService: CommentsService, private usersService: UsersService) {
    this.postsService.getPosts().subscribe(value => this.posts = value);
    this.commentsService.getComments().subscribe(value => this.comments = value);
    this.usersService.getUsers().subscribe(value => this.users = value);
    this.greeting();
  }

  greeting() {
    console.log('hello');
  }
}
