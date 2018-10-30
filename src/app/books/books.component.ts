import { Component, OnInit } from '@angular/core';
import { DataHttpService } from '../services/data-http.service';
import { ObjectUnsubscribedError } from 'rxjs';
import { Users } from '../models/users';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  users: Users;
  elements: any;

  constructor(public data: DataHttpService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(items => {
      this.elements = items;
    });
  }


}
