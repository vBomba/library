import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/render3/util';

@Injectable()
export class DataHttpService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return (this.http.get('https://reqres.in/api/users?page=2'));
  }
}
