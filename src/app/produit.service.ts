import { Injectable } from '@angular/core';
import { Produit } from './model/produit.model';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Modele } from './model/modele.model';
import { Categorie } from './model/categorie.model';
import { Marque } from './model/marque.model';
import { CatService } from './services/cat.service';
import { FormGroup } from '@angular/forms';

const httpOPtions = {
 headers : new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

apiURL : string =  'http://localhost:8085/api/produits';
produits :Produit[];
 produit :Produit;
 public modeles:Modele[];
 public marque:Marque;
 public categorie:Categorie;
 public dataForm: FormGroup;
 

  constructor(private http : HttpClient) { 
   this.listeProduits();
   this.listeCategories();
   this.listeModele();
  }
  uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
    return this.http.request(req);
  }

  createData(formData: FormData): Observable<any> {
    return this.http.post("/api/produit/add", formData);
  }



listeProduits():Observable<Produit[]>{
  
  return this.http.get<Produit[]>(this.apiURL);
}
listeCategories():Observable<Categorie[]>{
  
  return this.http.get<Categorie[]>('/api/categorie/liste');
}

listeModele(): Observable<any> {
   
  return this.http.get('/api/modele/liste');
}
consulterModele(id : number): Observable<Modele>{

  const url = `${'api/modele'}/${id}`;
  return this.http.get<Modele>(url);

}


ajouterProduit(prod: Produit):Observable<Produit>{
 return this.http.post<Produit>('http://localhost:8085/api/produit/addd', prod, httpOPtions);
}

ajouterCategorie(cat : Categorie):Observable<Categorie>{
  return this.http.post<Categorie>('/api/categorie/add',cat,httpOPtions);
}

supprimerProduit(id: number){

  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOPtions);
  }


consulterProduit(id : number): Observable<Produit>{

  const url = `${this.apiURL}/${id}`;
  return this.http.get<Produit>(url);

}

consulterCategorie(id : number): Observable<Categorie>{

  const url = `${'api/categorie'}/${id}`;
  return this.http.get<Categorie>(url);

}


trierProduits(){
  this.produits = this.produits.sort((n1,n2) => {
    if (n1.idProduit > n2.idProduit){
      return 1;
    }
    if (n1.idProduit > n2.idProduit) {
      return -1;
    }
    return 0;
  });
}



updateProduit(prod : Produit):Observable<Produit>{
return this.http.put<Produit>(this.apiURL, prod, httpOPtions);
}
 getProduitModeles(id :number){
  this.produits.forEach((curProduit) => {
      if( curProduit.idProduit == id ) {
      this.modeles = curProduit.modeles;
      }
      });
}



}
