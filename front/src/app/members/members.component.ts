import { Component, OnInit } from '@angular/core';
import {User} from '../user/user';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAll()
      .subscribe(users => this.users = users);
  }
}
