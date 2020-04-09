import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UsersModel} from '../../models/UsersModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number) {
    return this.http.get<UsersModel[]>(`https://jsonplaceholder.typicode.com/users/${id}`);

  }

}
