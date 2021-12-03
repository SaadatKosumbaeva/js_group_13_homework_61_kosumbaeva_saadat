import { Component } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  name = '';
  email = '';
  isActive = true;
  role = 'User';

  constructor(private userService: UserService) {
  }

  addUser() {
    if (this.name.trim().length &&
      this.email.trim().length) {
      const newUser = new User(this.name, this.email, this.isActive, this.role);
      const existingUser = this.userService.getUsers().find(userItem => userItem.name === newUser.name && userItem.email === newUser.email);

      if (!existingUser) {
        this.userService.addUser(newUser);

        this.name = '';
        this.email = '';
        this.isActive = true;
        this.role = 'User';

      } else {
        return alert('Such user already exists');
      }
    } else {
      alert('Data entered incorrectly');
    }
  }
}
