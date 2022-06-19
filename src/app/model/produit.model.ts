import { Categorie } from "./categorie.model";
import { Delegation } from "./delegation.model";
import { Modele } from "./modele.model";

export class Produit {
    idProduit : number;
    nomProduit : string;
    prixProduit : number;
    dateCreation : Date ;
     modeles : Modele[];
     categorie :Categorie;
     delegation : Delegation;
    
     user:string;
}