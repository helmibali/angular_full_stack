import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Produit } from 'src/app/model/produit.model';

@Component({
  selector: 'app-produits-filtred',
  templateUrl: './produits-filtred.component.html',
  styleUrls: ['./produits-filtred.component.css']
})
export class ProduitsFiltredComponent implements OnInit {
  @Input()
  term;
  constructor(
   public authService:AuthService
  ) { }

  @Input() 
  produits: Produit[];

  ngOnInit(): void {
  }

}
