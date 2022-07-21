import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Delegation } from 'src/app/model/delegation.model';
import { Gouvernorat } from 'src/app/model/gouvernorat.model';
import { DelegationService } from 'src/app/services/delegation.service';
import { GouvernoratService } from 'src/app/services/gouvernorat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userFile ;
  validImg:boolean=false;
  onSelect:boolean=false;
  ok:String='';
  selectedGouvernorat: any={id:0,  libelle:''};
  imgURL: any;
  public imagePath;
  public message: string;
  gouvernorats:Gouvernorat[];
  delegations:Delegation[];
  constructor(
    public userService: UserService,
    public fb:FormBuilder,
    private router:Router,
    private gouvernoratService : GouvernoratService,
    private delegationService : DelegationService,

  ) { }
  infoForm(){
    this.userService.dataForm = this.fb.group({
      // id: null,
      prenom:'',
      nom:'',
      naissance:'',
      telephone:'',
      username:'',
      password:'',
      delegation_id:null,
      });
  }

  ngOnInit(): void {
    this.infoForm();
    this.gouvernoratService.listeGouvernorats().subscribe(g=>{
      this.gouvernorats=g;
    })
  }
  addData(){
   if (!this.validImg){
    const formData = new FormData();
    const user = this.userService.dataForm.value;
    formData.append('user',JSON.stringify(user));
   // formData.append('file',this.userFile);
    this.userService.createData(formData).subscribe(data=>{
      console.log(data);
    });
    // this.router.navigate(['produits']).then(()=> {
    //   window.location.reload();
    // });
   }

   else{
    const formData = new FormData();
    const user = this.userService.dataForm.value;
    formData.append('user',JSON.stringify(user));
    formData.append('file',this.userFile);
    this.userService.createDataWithFile(formData).subscribe(data=>{
      console.log(data);
    });
    // this.router.navigate(['produits']).then(()=> {
    //   window.location.reload();
    // });
   }
   
  }

  onSelectGov(e){
    console.log(e.target.value);
    this.delegationService.ListDelegationByGouvernourat_id(e.target.value).subscribe(data=>{
      this.delegations = data;
      
    });
    this.selectedGouvernorat.id = e.target.value;
  }

  

  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
      this.onSelect=true;
  
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }  
}

validateImg(){
 
  this.validImg=true;
  console.log(this.validImg);
  this.ok = 'Votre choix est valide';
}


}
