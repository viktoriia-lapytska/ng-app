import {Component, Input} from '@angular/core';
import {UsersModel} from '../../models/UsersModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UsersComponent {

  @Input()
  user: UsersModel;

  constructor() {
  }

}
