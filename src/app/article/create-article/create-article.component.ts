import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  userFile ;
  imgURL: any;
  public imagePath;
  public message: string;
  constructor(
    public articleService:ArticleService,
    private router:Router,
    private formBuilder : FormBuilder,
    public authService : AuthService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.articleService.dataForm = this.formBuilder.group({
      title:'',
      text:'',
      dateCreation:Date.now(),
      user:this.authService.loggedUser,
    })
  }

  insertArticle(){
    const formData = new FormData();
    const produit = this.articleService.dataForm.value;
    formData.append('article',JSON.stringify(produit));
    formData.append('file',this.userFile);
    this.articleService.createData(formData).subscribe(data=>{
      console.log(data);
      
    });
    this.router.navigate(['actualite']).then(()=> {
      window.location.reload();
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
