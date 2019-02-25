import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Config} from "../config";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private http: HttpClient, private config: Config) { }

  ngOnInit() {
    this.http.get(this.config.apiUrl + '/users')
      .subscribe(data => {
        console.log(data)
      })
  }

}
