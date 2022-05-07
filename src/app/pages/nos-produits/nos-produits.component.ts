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
  marques:any[];
  produit:Produit;
  produits:Produit[];
  modeles:any[];
  modele:Modele;
  produitsCategorie: Produit[];
  selectedMarque: any = {id:0, marqueLibelle:''};
  selectedCategorie: any = {id:0, nomCategorie:''};
  selectedModele: any = {id:0, libelleModele:''};
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
    this.onSelect(this.selectedMarque.id);
  
   
  }

  PrduitsCategorieList(id:number){
    this.produitService.listeProduitsByCategorie(id).subscribe(data=>{
    this.produitsCategorie=data;
    })
  }

  CategoriesList(){
    this.catService.listeCategories().subscribe(cats => {
      console.log(cats);
      this.categories = cats;
    });
  }
marquesList(){
  this.marqueService.getAllMarques().subscribe(m=>{

    this.marques=m;
  })
}


produitList(){
  this.produitService.listeProduits().subscribe(p=>{
    console.log(p);
    this.produits=p;
  })
}

modeleList(){
  this.modeleService.getAllModeles().subscribe(mo=>{
    this.modeles=mo;
  })
}




onSelect(e){
  console.log(e.target.value);

  this.modeleService.getAllModelesByMarque_id(e.target.value).subscribe(data=>{
    this.modeles = data;
  })
}

onSelectByMod(e){
  console.log(e.target.value);
  this.selectedModele.id=e.target.value;
  // this.produitService.listeProdduitsByModele(e.target.value).subscribe(data=>{
  //   this.produits = data;
  // })
  
}
onSelectByCat(e){
  //console.log(e.target.value);
  this.selectedCategorie.id = e.target.value;
  // this.produitService.listeProduitsByCategorie(e.target.value).subscribe(data=>{
  //   this.produits = data;
  // })
}

onSubmit(){
  if (this.selectedModele.id==0){
     this.produitService.listeProduitsByCategorie(this.selectedCategorie.id).subscribe(data=>{
   this.produits = data;
  })
}
  else if(this.selectedCategorie.id==0){
 this.produitService.listeProdduitsByModele(this.selectedModele.id).subscribe(data=>{
     this.produits = data;
   })

  }else{
    this.produitService.listeProdduitsByModeleAndCategorie(this.selectedModele.id,this.selectedCategorie.id).subscribe(p=>{
      this.produits = p;
    })

  }
 


}
}
