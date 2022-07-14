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
    return this.http.get<Famille[]>('/api/familles');
  }
  familleById(id:number):Observable<Famille>{
    return this.http.get<Famille>('/api/famille');
  }
  
}
