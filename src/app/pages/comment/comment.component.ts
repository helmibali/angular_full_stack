import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Article } from 'src/app/model/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { CommentService } from 'src/app/services/comment.service';
import { MarqueService } from 'src/app/services/marque.service';
import { ModeleService } from 'src/app/services/modele.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
article:Article;
  constructor(
    private fb : FormBuilder,
    public commentService: CommentService,
    public articleService:ArticleService,
    public authService : AuthService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.commentService.dataForm = this.fb.group({
      id: null,
      text:[''],
      dateComment:Date.now(),
      user_id:this.authService.loggedUserId,
      article_id:this.article.id,
      });
  }

}
