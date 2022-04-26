import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  constructor(private api:ApiService) { }

  users:any[]=[];
  isLoading:boolean = false;
  errTXT:string='';

  ngOnInit(): void {
    this.initData();
  }

  initData(){
    this.isLoading=true;
    this.api.getUserslist().toPromise().then((res:any[])=>{
      console.log(res);
      this.users=res;
    })
    .catch(()=>this.errTXT="msg d'erreur").finally(()=>{
      this.isLoading = false;
    })
  }

}
