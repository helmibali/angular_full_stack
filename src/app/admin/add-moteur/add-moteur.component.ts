import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Modele } from 'src/app/model/modele.model';
import { ProduitService } from 'src/app/produit.service';
import { DelegationService } from 'src/app/services/delegation.service';
import { GouvernoratService } from 'src/app/services/gouvernorat.service';
import { MarqueService } from 'src/app/services/marque.service';
import { ModeleService } from 'src/app/services/modele.service';
import { MoteurService } from 'src/app/services/moteur.service';

@Component({
  selector: 'app-add-moteur',
  templateUrl: './add-moteur.component.html',
  styleUrls: ['./add-moteur.component.css']
})
export class AddMoteurComponent implements OnInit {
  selectedMarque: any = {id:0, marqueLibelle:''};
  modeles:Modele[];
  marques:any[];
  dropdownSettings;

  constructor(
    public moteurService: MoteurService,
              public produitService:ProduitService,
              private router:Router,
              private formBuilder : FormBuilder,
              private modeleService : ModeleService,
              private marqueService : MarqueService,
              private authService : AuthService,
              private gouvernoratService : GouvernoratService,
              private delegationService : DelegationService,
  ) { }

  ngOnInit(): void {

    this.initForm();

    this.produitService.listeModele().subscribe(m=>{
      this.modeles=m;
    })

    this.marqueService.getAllMarques().subscribe(m=>{
      this.marques=m;
    })

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'libelleModele',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All'
    };
  }

  initForm(){
    this.moteurService.dataForm = this.formBuilder.group({
      libelle:'autre',
      carburant:'autre',
      modeles : [],
    })
  }

  onSubmit(){
    const formData = new FormData();
    const moteur = this.moteurService.dataForm.value;
    formData.append('moteur',JSON.stringify(moteur));
    this.moteurService.ajouterMoteur(formData).subscribe(data=>{
      console.log(data);
      
    });
    this.router.navigate(['/moteurs']).then(()=> {
      window.location.reload();
    });
  }

  onItemSelect($event){
    console.log('$event is ', $event); 
  }
  getObjectListFromData(ids){
    return this.modeles.filter(item => ids.includes(item.id))
  }

  onSelect(e){
    console.log(e.target.value);
  
    this.modeleService.getAllModelesByMarque_id(e.target.value).subscribe(data=>{
      this.modeles = data;
    })
  }

}
