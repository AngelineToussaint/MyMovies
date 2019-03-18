import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {MatSnackBar} from '@angular/material';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logged = false;

  constructor(private snackBar: MatSnackBar, private userService: UserService) { }

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.logged = true;
    }
  }

  signin(email: string, username: string, password: string): void {
    this.userService.add(email, username, password)
      .subscribe(res => {
      this.snackBar.open('Inscription réussie !', 'Ok !', {
        duration: 5000
      });
    });
  }

  login(email: string, password: string) {
    this.userService.check(email, password)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user_id', res.id);

        this.logged = true;

        this.snackBar.open('Connexion réussie !', 'Ok !', {
          duration: 5000
        });
      });
  }

}
