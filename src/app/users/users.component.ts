import { Component, OnInit } from '@angular/core';
import { DataHttpService } from '../services/data-http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  elements: any;
  constructor(public data: DataHttpService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(items => {
      this.elements = items;
    });
  }

}
