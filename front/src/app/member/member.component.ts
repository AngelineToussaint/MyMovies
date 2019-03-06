import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../user/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.get(id)
      .subscribe(user => this.user = user);
  }

}
