import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/model/categorie.model';
import { Marque } from 'src/app/model/marque.model';
import { Modele } from 'src/app/model/modele.model';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/produit.service';
import { CatService } from 'src/app/services/cat.service';
import { MarqueService } from 'src/app/services/marque.service';
import { ModeleService } from 'src/app/services/modele.service';


@Component({
  selector: 'app-nos-produits',
  templateUrl: './nos-produits.component.html',
  styleUrls: ['./nos-produits.component.css']
})
export class NosProduitsComponent implements OnInit {
  term;
  categories:Categorie[];
  marques:Marque[];
  produits:Produit[];
  modeles:Modele[];
  constructor(
    private catService : CatService,
    private produitService : ProduitService,
    private marqueService : MarqueService,
    private modeleService : ModeleService,
  ) { }

  ngOnInit(): void {
    this.CategoriesList();
    this.marquesList();
    this.modeleList();
    this.produitList();
  }

  CategoriesList(){
    this.catService.listeCategories().subscribe(cats => {
      console.log(cats);
      this.categories = cats;
    });
  }
marquesList(){
  this.marqueService.getAll().subscribe(m=>{
    this.marques=m;
  })
}


produitList(){
  this.produitService.listeProduits().subscribe(p=>{
    this.produits=p;
  })
}

modeleList(){
  this.modeleService.getAll().subscribe(mo=>{
    this.modeles=mo;
  })
}
}
