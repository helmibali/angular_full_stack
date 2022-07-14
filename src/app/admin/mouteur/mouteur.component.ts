import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Moteur } from 'src/app/model/moteur.model';
import { MoteurService } from 'src/app/services/moteur.service';

@Component({
  selector: 'app-mouteur',
  templateUrl: './mouteur.component.html',
  styleUrls: ['./mouteur.component.css']
})
export class MouteurComponent implements OnInit {
moteurs:Moteur[];
  constructor(private moteurService:MoteurService,
    public authService:AuthService) { }

  ngOnInit(): void {
    this.moteurService.listeMoteurs().subscribe(m=>{
      this.moteurs=m;
      console.log(this.moteurs)
    })
  }

}
