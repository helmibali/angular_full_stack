import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Role } from 'src/app/model/role.model';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  roles:Role[];
  dropdownSettings;
  currentUser = new User();
  public imagePath;
  imgURL: any;
  userFile ;
  public message: string;
  constructor(
    public userService: UserService,
    public authService: AuthService,
    public fb:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute,
  ) {
    this.userService.dataForm = this.fb.group({
      prenom:'',
      nom:'',
      naissance:'',
      roles :[],
      });


   }

  ngOnInit(): void {
    
    
    this.userService.getUserById(this.activatedRoute.snapshot.params.user_id).
    subscribe( user =>{
      this.currentUser=user;
      this.RolesData();
      this.userService.dataForm = new FormGroup({
        prenom: new FormControl(this.currentUser.prenom),
        nom:new FormControl(this.currentUser.nom),
        naissance: new FormControl(this.currentUser.naissance),
        roles :new FormControl(this.currentUser.roles),
        });
  

    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'role',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All'
    };
  }


  RolesData(){
    this.userService.getRoleslist().subscribe((r:any[])=>{
    console.log(r);
    this.roles=r;
    })
  }



  updateData(){
    const formData = new FormData();
    const user = this.userService.dataForm.value;
    formData.append('user',JSON.stringify(user));
    formData.append('file',this.userFile);
    this.userService.updateData(formData,this.currentUser.user_id).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/utilisateurs']);
    });
  }





  onItemSelect($event){
    console.log('$event is ', $event); 
  }

  getObjectListFromData(ids){
    return this.roles.filter(item => ids.includes(item.id))
  }




  

  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
  
 
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


}
