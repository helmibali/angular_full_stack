import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modele } from '../model/modele.model';


const httpOPtions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
 };

@Injectable({
  providedIn: 'root'
})
export class ModeleService {
modeles:Modele[];
apiUrl:'api/modele'
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
   
    return this.http.get('/api/modele/liste');
  }
  consulterModele(id : number): Observable<Modele>{

    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Modele>(url);
  
  }
  updateCategorie(m : Modele ,id :number):Observable<Modele>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Modele>(url , m, httpOPtions );

  }
  ajouterCategorie(m : Modele):Observable<Modele>{
    return this.http.post<Modele>('/api/modele/add',m,httpOPtions);
  }
  supprimerCategorie(id: number){

    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, httpOPtions);
    }
}
