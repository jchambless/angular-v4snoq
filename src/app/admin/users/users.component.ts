import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IUser } from './models/user';
import { IRole } from '../roles/models/role';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users$: Observable<IUser[]>;
  roles$: Observable<IRole[]>;

  ngOnInit(): void {
    this.users$ = of<IUser[]>([
      {
        Id: 1,
        Username: 'jdoe',
        FirstName: 'John',
        LastName: 'Doe',
        Roles: ['User']
      },
      {
        Id: 2,
        Username: 'janedoe',
        FirstName: 'Jane',
        LastName: 'Doe',
        Roles: ['User']
      },
      {
        Id: 3,
        Username: 'jchambless',
        FirstName: 'James',
        LastName: 'Chambless',
        Roles: ['Administrator']
      }
    ]);
    this.roles$ = of<string[]>([
      'Administrator',
      'User'
    ]);
  }

  delete(input: number): void {

  }

  onUserEditComplete($event: any): void {
    console.log($event);
  }

  onUserEditCancel($event: any): void {
    console.log($event);
  }
}