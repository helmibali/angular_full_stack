import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/model/user.model';
import { JwtClientService } from 'src/app/services/jwt-client.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new User();
err:number = 0;
erreur=0;
isLoading:boolean = false;
errTXT:string ='';
  constructor(private authService:AuthService,
              private router:Router,
              ) {}





onLoggedin()
{
  this.authService.getUserFromDB(this.user.username).subscribe(usr=>{
    if(usr.password == this.user.password)
  {
    this.authService.signIn(usr);
    this.router.navigate(['/']);
  }
  else
  this.erreur=1;
  },
  
  (err)=>{
    this.err=1;
    console.log(err);
  }
  );
    

    
}
  ngOnInit(): void {
  }

}
