import { EventEmitter } from '@angular/core';
import { User } from './user.model';

export class UserService {
  usersChange = new EventEmitter<User[]>();
  private users: User[] = [
    new User('Admin', 'admin@gmail.com', true, 'Admin'),
    new User('John', 'john@gmail.com', false, 'User'),
    new User('Isaac', 'admin@gmail.com', true, 'Editor'),
    new User('Jane', 'admin@gmail.com', true, 'User'),
  ];

  getUsers() {
    return this.users.slice();
  }

  addUser(user: User) {
    this.users.push(user);
    this.usersChange.emit(this.users);
  }
}
