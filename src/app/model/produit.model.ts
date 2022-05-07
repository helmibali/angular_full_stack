import { Categorie } from "./categorie.model";
import { Modele } from "./modele.model";

export class Produit {
    idProduit : number;
    nomProduit : string;
    prixProduit : number;
    dateCreation : Date ;
     modeles : Modele[];
     categorie :Categorie;


//   constructor(idProduit:number, nomProduit:string,prixProduit:number, dateCreation : Date, modeles : Modele[],categorie : Categorie){
//       this.idProduit = idProduit;
//       this.nomProduit = nomProduit;
//       this.prixProduit = prixProduit;
//       this.dateCreation = dateCreation;
//       this.categorie = categorie;
//       this.modeles = modeles;
//   };


}