import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

const httpOPtions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
 };

@Injectable({
  providedIn: 'root'
})
export class CommentService {

comment:Comment;
comments:Comment[];
public dataForm: FormGroup;

  constructor(
    private http: HttpClient
  ) { }
 

    addComment(formData: FormData):Observable<any>{
      return this.http.post<any>('api/comment',formData);
    }
    

}
