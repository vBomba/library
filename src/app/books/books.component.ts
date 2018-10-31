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

  elements: any;

  constructor(public data: DataHttpService) { }

  ngOnInit() {
    this.data.getBooks().subscribe(response => {
      this.elements = response.items;
      console.log(response.items);
    });
  }


}
