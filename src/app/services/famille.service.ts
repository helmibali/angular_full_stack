import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Famille } from '../model/famille.model';
const httpOPtions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
 };

@Injectable({
  providedIn: 'root'
})
export class FamilleService {

  constructor(private http:HttpClient) { }

  listeFamille():Observable<Famille[]>{
    return this.http.get<Famille[]>('http://piece-de-rechange.herokuapp.com/api/familles');
  }
  familleById(id:number):Observable<Famille>{
    return this.http.get<Famille>('http://piece-de-rechange.herokuapp.com/api/famille');
  }
  ajouterCategorie(f : Famille):Observable<Famille>{
    return this.http.post<Famille>('http://piece-de-rechange.herokuapp.com/api/famille',f,httpOPtions);
  }
  
}
