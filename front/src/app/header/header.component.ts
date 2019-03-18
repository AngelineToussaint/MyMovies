import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged = false;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.logged = true;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('ip');

    this.logged = false;
  }

}
