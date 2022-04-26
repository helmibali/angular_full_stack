import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userFile ;
  imgURL: any;
  public imagePath;
  public message: string;
  constructor(
    public userService: UserService,
    public fb:FormBuilder,
    private router:Router,

  ) { }
  infoForm(){
    this.userService.dataForm = this.fb.group({
      // id: null,
      prenom:'',
      nom:'',
      naissance:'',
      username:'',
      password:'',
      });
  }

  ngOnInit(): void {
    this.infoForm();
  }
  addData(){
    const formData = new FormData();
    const user = this.userService.dataForm.value;
    formData.append('user',JSON.stringify(user));
    formData.append('file',this.userFile);
    this.userService.createData(formData).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/']);
    });
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
