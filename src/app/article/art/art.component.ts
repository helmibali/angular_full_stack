import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
articles:Article[];

  constructor(public articleService:ArticleService) { }

  ngOnInit(): void {
    this.articleService.listeArticles().subscribe(a=>{
      console.log(a);
      this.articles=a;
    })
  }
 

articlesBydate(): Article[] {
  return this.articles
    .sort(
      (a, b) =>
        new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime()
   );
}
  

}
