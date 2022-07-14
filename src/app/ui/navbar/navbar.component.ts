import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  term;
  title= "Mes Produits";
  user:User;
  darkModeEnabled:boolean = false;
  addButton:string = "Publier une Annonce";
  constructor(public authService:AuthService,
     private router:Router,
     public userService: UserService) { }

  ngOnInit(): void {
  //    let isloggedin: string;
  // let loggedUser:string;
  // isloggedin = localStorage.getItem('isloggedIn');
  // loggedUser = localStorage.getItem('loggedUser');
  // if (isloggedin!="true" || !loggedUser)
  // this.router.navigate(['/login']);
  
  // else
  // this.authService.setLoggedUserFromLocalStorage(loggedUser);
  this.userService.getUserByUsername(this.authService.loggedUser).subscribe(u=>{
    this.user=u;
    console.log(this.user);
  })
  }

  logout(){
    this.authService.logout();
  }

  switch(){
    this.darkModeEnabled = ! this.darkModeEnabled;
  }

  viewProfile(){
    this.router.navigate(['/profile',this.user.user_id]).then(()=> {
      window.location.reload();
    });
  }

}
