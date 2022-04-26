import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie.model';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
newCat = new Categorie();
  constructor(private catService:CatService,
              private router:Router) { }

  addCategorie(){
    this.catService.ajouterCategorie(this.newCat).subscribe(cat=> {
      console.log(cat);
      });
      this.router.navigate(['categories']);
    }
             

  ngOnInit(): void {
  }

}
