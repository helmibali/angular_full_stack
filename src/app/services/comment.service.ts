import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Article } from '../model/article.model';
import { Cmt } from '../model/cmt.model';
import { User } from '../model/user.model';

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

  constructor(public authservice:AuthService,
    private http: HttpClient
  ) { }
 

    addComment(formData: FormData):Observable<any>{
      return this.http.post<any>
      ('api/comment1',formData);
    }

    
  getComments():Observable<any>{
  
    return this.http.get<any>('api/comments');
  }
    createComment(text:string,parentId:number,articleId:number):Observable<Cmt>{
      return this.http.post<Cmt>('api/comment',{
        text: text,
        user: this.authservice.loggedUser,
        article:articleId,
        parentId,
        dateComment:new Date(),
      })
    }

    listeComments():Observable<Cmt[]>{
  
      return this.http.get<Cmt[]>('api/comments');
    }

    deleteComment(id: number){

      const url = `${'api/comment'}/${id}`;
      return this.http.delete(url, httpOPtions);
      }

      updateComment(id:number, text:string,parentId:number,articleId:number):Observable<Cmt>{
        return this.http.put<Cmt>(`'api/comment'/${id}`,{
          id,
          text: text,
          user: this.authservice.loggedUser,
          article:articleId,
          parentId,
          dateComment:new Date(),
        })
      }
  

}
