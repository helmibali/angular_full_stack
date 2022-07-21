import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Marque } from '../model/marque.model';
const httpOPtions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
 };


@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  baseUrl:'/api/marque';
  marques: Marque[];
  host:'localhost:8085';
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
   createData(formData: FormData): Observable<any> {
    return this.http.post("http://piece-de-rechange.herokuapp.com/api/addMarque", formData);
  }

  getData(id: number): Observable<Object> {
    return this.http.get(`${'http://piece-de-rechange.herokuapp.com/api/marque'}/${id}`);
  }
  updateMarque(formData: FormData):Observable<Marque>{
    return this.http.put<Marque>("http://piece-de-rechange.herokuapp.com/api/marque", formData);
    }
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getAll(): Observable<any> {
   
    return this.http.get('http://piece-de-rechange.herokuapp.com/api/marque/liste');
  }
  supprimerProduit(id: number){

    const url = `${'http://piece-de-rechange.herokuapp.com/api/marque'}/${id}`;
    return this.http.delete(url, httpOPtions);
    }
    consulterMarque(id : number): Observable<Marque>{
      const url = `${'http://piece-de-rechange.herokuapp.com/api/marque'}/${id}`;
      return this.http.get<Marque>(url);
    }
    getAllMarques():Observable<any>{
      return this.http.get<any>('http://piece-de-rechange.herokuapp.com/api/marque/liste');
    }
}

