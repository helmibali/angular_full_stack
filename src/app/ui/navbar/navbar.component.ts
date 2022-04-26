import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title= "Mes Produits"
  constructor(public authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  //    let isloggedin: string;
  // let loggedUser:string;
  // isloggedin = localStorage.getItem('isloggedIn');
  // loggedUser = localStorage.getItem('loggedUser');
  // if (isloggedin!="true" || !loggedUser)
  // this.router.navigate(['/login']);
  
  // else
  // this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }

  logout(){
    this.authService.logout();
  }

}
