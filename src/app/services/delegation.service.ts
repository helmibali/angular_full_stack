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
    return this.http.get<Delegation[]>('/api/delegations')
  }

  ListDelegationByGouvernourat_id(id:number):Observable<any>{
    return this.http.get<any>(`${'/api/delegations'}/${id}`)
  }
}
