import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostsModel} from '../../models/PostsModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<PostsModel[]> {
    return this.http.get<PostsModel[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number) {
    return this.http.get<PostsModel[]>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
