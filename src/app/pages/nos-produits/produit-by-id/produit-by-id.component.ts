import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/model/produit.model';
import { User } from 'src/app/model/user.model';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-produit-by-id',
  templateUrl: './produit-by-id.component.html',
  styleUrls: ['./produit-by-id.component.css']
})
export class ProduitByIdComponent implements OnInit {
  produit :Produit;
  isLoading:boolean = false;
  errTXT:string='';
  constructor(public produitService:ProduitService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
//     this.produitService.consulterProduit(this.activatedRoute.snapshot.params.id).subscribe(p=>{
//       this.produit=p;
//       console.log(this.produit.categorie.nomCategorie);
      
      
// });


this.initData();
    
}

initData(){
  this.isLoading=true;
  this.produitService.consulterProduit(this.activatedRoute.snapshot.params.id).toPromise().then(p=>{
    console.log(p);
    this.produit=p;
  })
  .catch(()=>this.errTXT="msg d'erreur").finally(()=>{
    this.isLoading = false;
  })
}
  
}


