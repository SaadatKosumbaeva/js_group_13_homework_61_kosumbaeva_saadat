import { Component, OnInit } from '@angular/core';
import { Group } from '../../shared/group.model';
import { GroupService } from '../../shared/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups!: Group[];

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groups = this.groupService.getGroups();
    this.groupService.groupChange.subscribe((groups: Group[]) => {
      this.groups = groups;
    })
  }
}
