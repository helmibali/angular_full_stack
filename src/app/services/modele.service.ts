import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
apiUrl:'api/modele';
public dataForm: FormGroup;
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
  ajouterCategorie(formData: FormData):Observable<any>{
    return this.http.post<any>('api/modele/add',formData);
  }
  supprimerCategorie(id: number){

    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, httpOPtions);
    }

    getAllModeles():Observable<any>{
      return this.http.get<any>('/api/modele/liste');
    }

    getAllModelesByMarque_id(id:number):Observable<any>{
      return this.http.get<any>(`${'/api/modeleByMarqueId'}/${id}`);
    }
    
}
