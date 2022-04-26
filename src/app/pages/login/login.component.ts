import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new User();
erreur=0;
  constructor(private authService:AuthService,
              private router:Router) {}





onLoggedin()
{
  this.authService.getUserFromDB(this.user.username).subscribe((usr:User)=>{
    if(usr.password == this.user.password)
  {
    this.authService.signIn(usr);
    this.router.navigate(['/']);
  }
  else
  this.erreur=1;
  },(err)=>console.log(err));
    

    
}
  ngOnInit(): void {
  }

}
