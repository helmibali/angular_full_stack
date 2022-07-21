import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gouvernorat } from '../model/gouvernorat.model';
const httpOPtions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
 };

@Injectable({
  providedIn: 'root'
})
export class GouvernoratService {

  constructor(private http : HttpClient) { }

  listeGouvernorats():Observable<Gouvernorat[]>{
  
    return this.http.get<Gouvernorat[]>('http://piece-de-rechange.herokuapp.com/api/gouvernorats');
  }
}
