import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from './model/role.model';
import { User } from './model/user.model';

const httpOPtions = {
  headers: new HttpHeaders ({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public loggedUser:string;
public loggedUserId:number;
public loggedUserPassword:String;
public isloggedIn:Boolean=false;
public roles:Role[];

apiURL: string = '/api/login';
apiURLall: string = '/api/users/liste';

  constructor(private router:Router, private http:HttpClient) { }

  getUserFromDB(username:string):Observable<User>
  {
    const url = `${this.apiURL}/${username}`;
    return this.http.get<User>(url)
  }

  getUserslist(){
    return  this.http.get(this.apiURLall);
  }

  signIn(user:User)
  {
    this.loggedUser=user.username;
    this.loggedUserId=user.user_id;
    this.loggedUserPassword=user.password;
    this.isloggedIn=true;
    this.roles=user.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
  }

  isAdmin():Boolean{
    let admin: Boolean = false;
    if (!this.roles) //this.roles== undefiened
    return false;
    this.roles.forEach((curRole) => {
    if(curRole.role == 'ADMIN') {
    admin = true;
    }
    });
    return admin;
    }

    getUserRoles(username :string){
      this.getUserFromDB(username).subscribe((user: User)=>{
      this.roles = user.roles;
      });
      }
      addUser(user:User):Observable<User>{
        return this.http.post<User>('/api/user/add', user,httpOPtions);
      }


 
  logout() {
    this.isloggedIn= false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
    }



    setLoggedUserFromLocalStorage(login : string) {
      this.loggedUser = login;
      this.isloggedIn = true;
      this.getUserRoles(login);
      }

    
    
   
    
}