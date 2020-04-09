import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentsModel} from '../../models/CommentsModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<CommentsModel[]> {
    return this.http.get<CommentsModel[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getComment(id: number) {
    return this.http.get<CommentsModel[]>(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }
}
