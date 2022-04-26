import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {

  currentProduit = new Produit();

  constructor(private produitService:ProduitService,
              private activatedRoute:ActivatedRoute,
              private router:Router ) { }

  ngOnInit(): void {
   

    this.produitService.consulterProduit(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentProduit = prod;
    })
  }


  updateProduit(){
    this.produitService.updateProduit(this.currentProduit).subscribe(prod=>{
      this.router.navigate(['produits']);

    }
    ,(error)=> {alert('Probléme lors de la modification !')})
}
}
