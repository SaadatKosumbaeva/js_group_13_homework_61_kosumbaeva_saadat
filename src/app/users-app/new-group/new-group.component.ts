import { Component } from '@angular/core';
import { GroupService } from '../../shared/group.service';
import { Group } from '../../shared/group.model';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent {
  groupName = '';

  constructor(private groupService: GroupService) {}

  addGroup() {
    if (this.groupName.trim().length) {
      const newGroup = new Group(this.groupName);
      const existingGroup = this.groupService.getGroups().find(groupItem => groupItem.groupName === newGroup.groupName);

      if (!existingGroup) {
        this.groupService.addGroup(newGroup);
        this.groupName = '';
      } else {
        return alert('Such a group already exists');
      }
    } else {
      alert('Enter data');
    }
  }
}
