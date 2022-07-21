import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getUserslist(){
    return  this.http.get('http://piece-de-rechange.herokuapp.com/api/users/liste');
  }
}
