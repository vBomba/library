import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  numbers: number[] = [];
  books: number[] = [];
  ngOnInit() {}
  constructor() {
  for (let i = 0; i < 100; i++) {
      this.numbers.push( i );
  }
}
drop ( event: CdkDragDrop<number[]> ) {
  if ( event.previousContainer !== event.container) {
    transferArrayItem( event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex );
  } else {
    moveItemInArray ( event.container.data, event.previousIndex, event.currentIndex );
}
}
}
