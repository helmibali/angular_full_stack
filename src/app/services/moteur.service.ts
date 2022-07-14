import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Moteur } from '../model/moteur.model';

@Injectable({
  providedIn: 'root'
})
export class MoteurService {
  public dataForm: FormGroup;
  constructor(private http:HttpClient) { }
  listeMoteurs():Observable<Moteur[]>{
    return this.http.get<Moteur[]>('/api/moteurs');
  }

  moteursByModele(id):Observable<Moteur[]>{
    return this.http.get<Moteur[]>(`${'/api/moteurByModele'}/${id}`)
  }
  ajouterMoteur(formData: FormData):Observable<any>{
    return this.http.post<any>('api/moteur',formData);
  }
}
