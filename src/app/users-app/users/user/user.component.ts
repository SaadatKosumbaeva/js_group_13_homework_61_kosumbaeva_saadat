import { Component, Input } from '@angular/core';
import { User } from '../../../shared/user.model';
import { GroupService } from '../../../shared/group.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user!: User;

  constructor(private groupService: GroupService) {}

  addUserToGroup() {
    if (this.groupService.selectedGroup) {
      this.groupService.addUserToSelectedGroup(this.user);
    }
  }
}
