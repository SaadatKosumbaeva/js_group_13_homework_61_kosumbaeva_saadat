import { EventEmitter } from '@angular/core';
import { User } from './user.model';

export class Group {
  private users: User[] = [];
  groupUsersChange = new EventEmitter<User[]>();

  constructor(public groupName: string) {}

  addUser(user: User) {
    if (!this.users.includes(user)) {
      this.users.push(user);
      this.groupUsersChange.emit(this.users);
    }
  }

  getUsers() {
    return this.users.slice();
  }
}
