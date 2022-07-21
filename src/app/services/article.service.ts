import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Article } from '../model/article.model';

const httpOPtions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
 };

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
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
  getArticleById(id: number):Observable<Article> {
    return this.http.get<Article>(`${'http://piece-de-rechange.herokuapp.com/api/article'}/${id}`);
  }
  createData(formData: FormData): Observable<any> {
    return this.http.post('http://piece-de-rechange.herokuapp.com/api/article', formData);
  }
  updateData(formData: FormData,id:number): Observable<any> {
    return this.http.put(`${'http://piece-de-rechange.herokuapp.com/api/article'}/${id}`, formData);
  }
  listeArticles():Observable<Article[]>{
  
    return this.http.get<Article[]>('http://piece-de-rechange.herokuapp.com/api/articles');
  }
  supprimerArticle(id: number){

    const url = `${'http://piece-de-rechange.herokuapp.com/api/article'}/${id}`;
    return this.http.delete(url, httpOPtions);
    }

}
