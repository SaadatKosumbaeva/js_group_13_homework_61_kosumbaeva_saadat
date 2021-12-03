import { Component } from '@angular/core';

@Component({
  selector: 'app-users-app',
  templateUrl: './users-app.component.html',
  styleUrls: ['./users-app.component.css']
})
export class UsersAppComponent {
  page = 'Users and Groups';

  onManageClick() {
    this.page = 'Manage';
  }

  onUsersAndGroupsClick() {
    this.page = 'Users and Groups';
  }
}
