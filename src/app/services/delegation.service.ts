import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delegation } from '../model/delegation.model';

const httpOPtions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
 };

@Injectable({
  providedIn: 'root'
})
export class DelegationService {

  constructor(private http : HttpClient) { }

  ListeDelegation():Observable<Delegation[]>{
    return this.http.get<Delegation[]>('http://piece-de-rechange.herokuapp.com/api/delegations')
  }

  ListDelegationByGouvernourat_id(id:number):Observable<any>{
    return this.http.get<any>(`${'http://piece-de-rechange.herokuapp.com/api/delegations'}/${id}`)
  }

  ajouterDelegation(d : Delegation):Observable<Delegation>{
    return this.http.post<Delegation>('http://piece-de-rechange.herokuapp.com/api/delegation',d,httpOPtions);
  }
}
