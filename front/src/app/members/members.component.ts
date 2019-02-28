import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get(environment.apiUrl + '/users')
        .subscribe(data => {
          console.log(data);
        });
  }

  ngOnInit() {
  }

}
