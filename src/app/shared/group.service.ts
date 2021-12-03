import { EventEmitter } from '@angular/core';
import { Group } from './group.model';
import { User } from './user.model';

export class GroupService {
  groupChange = new EventEmitter<Group[]>();
  selectedGroupChange = new EventEmitter<Group>();
  private groups: Group[] = [
    new Group('Hiking group'),
    new Group('Book club'),
  ];
  selectedGroup!: Group;

  getGroups() {
    return this.groups.slice();
  }

  addGroup(group: Group) {
    this.groups.push(group);
    this.groupChange.emit(this.groups);
  }

  addUserToSelectedGroup(user: User) {
    const users = this.selectedGroup.getUsers();
    const existingUser = users.find(userItem => userItem === user);
    if (!existingUser) {
      this.selectedGroup.addUser(user);
    }
  }

  selectGroup(group: Group) {
    this.selectedGroup = group;
    this.selectedGroupChange.emit(this.selectedGroup);
  }
}
