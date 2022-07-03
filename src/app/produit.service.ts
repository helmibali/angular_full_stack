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

  updateData(formData: FormData,id:number): Observable<any> {
    return this.http.put(`${'api/produit'}/${id}`, formData);
  }






listeProduits():Observable<Produit[]>{
  
  return this.http.get<Produit[]>(this.apiURL);
}
ProdByModGov(id_marque,id_mod,id_gouvernorat):Observable<Produit[]>{
const url = `${'/api/produit/modeleByGov'}/${id_marque}/${id_mod}/${id_gouvernorat}`;
return this.http.get<Produit[]>(url);
}

listeProduitsByCategorie(id: number):Observable <Produit[]>{
  const url = `${'/api/produit_cat'}/${id}`;
  return this.http.get<Produit[]>(url);
}
listeProduitsByUser(user_id: number):Observable <Produit[]>{
  const url = `${'/api/produit/user'}/${user_id}`;
  return this.http.get<Produit[]>(url);
}
listeProdduitsByModele(id_mod:number):Observable <Produit[]>{
  const url = `${'api/produit/modele'}/${id_mod}`;
  return this.http.get<Produit[]>(url);
}
listeProdduitsByModeleAndCategorieAndMarque(id_mod:number,id_cat:number,id_marque:number):Observable <Produit[]>{
  const url = `${'/api/produit/modelebycat'}/${id_mod}/${id_cat}/${id_marque}`;
  return this.http.get<Produit[]>(url);
}

listeProdduitsByModeleAndCategorieAndGouvernorat(id_mod:number,id_cat:number,id_gouvernorat:number):Observable <Produit[]>{
  const url = `${'/api/produit/modele'}/${id_mod}/${id_cat}/${id_gouvernorat}`;
  return this.http.get<Produit[]>(url);
}

listeProdduitsByModeleAndCategorieAndGouvernoratAndDelegation(id_mod:number,id_cat:number,id_gouvernorat:number,id_delegation):Observable <Produit[]>{
  const url = `${'/api/produit/modele'}/${id_mod}/${id_cat}/${id_gouvernorat}/${id_delegation}`;
  return this.http.get<Produit[]>(url);
}
listeProdduitsByGouvernoratAndDelegation(id_gouvernorat:number,id_delegation:number):Observable <Produit[]>{
  const url = `${'/api/produit/delegationAndGouvernorat'}/${id_gouvernorat}/${id_delegation}`;
  return this.http.get<Produit[]>(url);
}

listeProdduitsByGouvernorat(id_gouvernorat:number):Observable <Produit[]>{
  const url = `${'/api/produit/gouvernorat'}/${id_gouvernorat}`;
  return this.http.get<Produit[]>(url);
}


listeProdduitsByGouvernoratAndMarque(id_gouvernorat:number,id_marque:number):Observable <Produit[]>{
  const url = `${'/api/produit/gouvernoratAndMarque'}/${id_gouvernorat}/${id_marque}`;
  return this.http.get<Produit[]>(url);
}

listeProdduitsByMarque(id_marque:number):Observable <Produit[]>{
  const url = `${'/api/produit/marque'}/${id_marque}`;
  return this.http.get<Produit[]>(url);
}

listeProdduitsByMarqueAndCategorie(id_marque:number, id_cat:number):Observable <Produit[]>{
  const url = `${'/api/produit/marque/categorie'}/${id_marque}/${id_cat}`;
  return this.http.get<Produit[]>(url);
}



listeProdduitsByGouvernoratAndDelegationAndMarque(id_gouvernorat:number,id_marque:number,id_delegation:number):Observable <Produit[]>{
  const url = `${'/api/produit/gouvernoratAndMarqueAndDelegation'}/${id_gouvernorat}/${id_marque}/${id_delegation}`;
  return this.http.get<Produit[]>(url);
}

listeProdduitsByGouvernoratAndDelegationAndMarqueAndCategorie(id_gouvernorat:number,id_marque:number,id_delegation:number,id_cat:number):Observable <Produit[]>{
  const url = `${'/api/produit/gouvernoratAndMarqueAndDelegationAndCategorie'}/${id_gouvernorat}/${id_marque}/${id_delegation}/${id_cat}`;
  return this.http.get<Produit[]>(url);
}

listeProdduitsByGouvernoratAndMarqueAndCategorie(id_gouvernorat:number,id_marque:number,id_cat:number):Observable <Produit[]>{
  const url = `${'/api/produit/gouvernoratAndMarqueAndCategorie'}/${id_gouvernorat}/${id_marque}/${id_cat}`;
  return this.http.get<Produit[]>(url);
}


listeProdduitsByDelegationAndModeles(id_delegation:number,id_mod:number):Observable <Produit[]>{
  const url = `${'/api/produit/delegationAndModeles'}/${id_delegation}/${id_mod}`;
  return this.http.get<Produit[]>(url);
}

listeProdduitsByGouvernoratAndCategorie(id_gouvernorat:number,id_cat):Observable <Produit[]>{
  const url = `${'/api/produit/gouvernoratAndCategorie'}/${id_gouvernorat}/${id_cat}`;
  return this.http.get<Produit[]>(url);
}
listeProdduitsByDelegationAndCategorie(id_delegation:number,id_cat):Observable <Produit[]>{
  const url = `${'/api/produit/delegationAndCategorie'}/${id_delegation}/${id_cat}`;
  return this.http.get<Produit[]>(url);
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

  const url = `${'api/produit/delete'}/${id}`;
  return this.http.delete(url, httpOPtions);
  }


consulterProduit(id : number): Observable<Produit>{

  const url = `${'api/produit'}/${id}`;
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
