import { Component, OnInit } from '@angular/core';
import { DataHttpService } from '../services/data-http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor( public data: DataHttpService ) { }

  ngOnInit() {
  }

  firstClick() {
    this.data.firstClick();
  }

}
