import { Injectable } from '@angular/core';

@Injectable()
export class DataHttpService {

  constructor() { }

  firstClick() {
    return console.log('clicked!');
  }
}
