import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
  ) { }

  ngOnInit(): void {
    this.infoForm();
    this.RolesData();

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


  infoForm(){
    this.userService.getUserById(this.activatedRoute.snapshot.params.user_id).
    subscribe( user =>{
      this.currentUser=user;
      this.userService.dataForm = this.fb.group({
      prenom: new FormControl(user.prenom,[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      nom:new FormControl(user.nom,[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      naissance: new FormControl(user.naissance),
      roles :new FormControl(user.roles),
      });
    });
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

  handleButtonClick(){
   // console.log('reactive form value ', this.form.value);
  //  console.log('Actual data ', this.getObjectListFromData(this.form.value.dropdownList.map(item => item.id )));
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
