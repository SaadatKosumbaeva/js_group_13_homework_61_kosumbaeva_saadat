import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../../../shared/group.model';
import { GroupService } from '../../../shared/group.service';
import { User } from '../../../shared/user.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  users!: User[];
  isSelected = false;
  @Input() group!: Group;

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.users = this.group.getUsers();
    this.group.groupUsersChange.subscribe((users: User[]) => {
      this.users = users;
    })

    if (this.groupService.selectedGroup === this.group) {
      this.isSelected = true;
    }

    this.groupService.selectedGroupChange.subscribe((group: Group) => {
      this.isSelected = group === this.group;
    })

  }

  onGroupClick() {
    this.groupService.selectGroup(this.group);
  }
}
