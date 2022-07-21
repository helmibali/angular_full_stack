import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

const httpOPtions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
 };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[];
  baseUrl:'/api/user';
  public dataForm: FormGroup;

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
    return this.http.request(req);
  }
  getUserById(user_id: number):Observable<User> {
    return this.http.get<User>(`${'http://piece-de-rechange.herokuapp.com/api/user'}/${user_id}`);
  }
  getUserByUsername(username: string):Observable<User> {
    return this.http.get<User>(`${'http://piece-de-rechange.herokuapp.com/api/login'}/${username}`);
  }
  createData(formData: FormData): Observable<any> {
    return this.http.post('http://piece-de-rechange.herokuapp.com/api/user/add', formData);
  }
  createDataWithFile(formData: FormData): Observable<any> {
    return this.http.post('http://piece-de-rechange.herokuapp.com/api/userWithImg/add', formData);
  }
  getRoleslist(){
    return  this.http.get('http://piece-de-rechange.herokuapp.comapi/role/liste');
  }
  updateData(formData: FormData ,user_id): Observable<any> {
    return this.http.put(`${'http://piece-de-rechange.herokuapp.com/api/user'}/${user_id}`, formData);
  }

  updateRole(u:User,user_id:number): Observable<User> {
    return this.http.put<User>(`${'http://piece-de-rechange.herokuapp.com/api/user'}/${user_id}`, u, httpOPtions);
  }
updateImageUser(formData:FormData , user_id):Observable<any> {
  return this.http.put(`${'http://piece-de-rechange.herokuapp.com/api/userImg'}/${user_id}`, formData)
}
updateImagePw(formData:FormData , user_id):Observable<any> {
  return this.http.put(`${'http://piece-de-rechange.herokuapp.com/api/userPw'}/${user_id}`, formData)
}

supprimerUtilisateur(id: number){

  const url = `${'http://piece-de-rechange.herokuapp.comapi/user'}/${id}`;
  return this.http.delete(url, httpOPtions);
  }
}
