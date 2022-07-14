import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { HttpClientModule} from '@angular/common/http';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { PieceComponent } from './pages/piece/piece.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ListeCategorieComponent } from './pages/categorie/liste-categorie/liste-categorie.component';
import { UpdateCategorieComponent } from './pages/categorie/update-categorie/update-categorie.component';
import { AddCategorieComponent } from './pages/categorie/add-categorie/add-categorie.component';
import { AddMarqueComponent } from './pages/marque/add-marque/add-marque.component';
import { ListMarqueComponent } from './pages/marque/list-marque/list-marque.component';
import { UpdateMarqueComponent } from './pages/marque/update-marque/update-marque.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SlideComponent } from './ui/slide/slide.component';
import { NosProduitsComponent } from './pages/nos-produits/nos-produits.component';
import { ListModeleComponent } from './pages/modele/list-modele/list-modele.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TestComponent } from './test/test.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { FiltreComponent } from './ui/filtre/filtre.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddModeleComponent } from './pages/modele/add-modele/add-modele.component';
import { UpdateImageComponent } from './pages/user/update-image/update-image.component';
import { UpdatePasswordComponent } from './pages/user/update-password/update-password.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListContactComponent } from './pages/list-contact/list-contact.component';
import { AjouterProduitFrontComponent } from './pages/produits/ajouter-produit-front/ajouter-produit-front.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ActualitesComponent } from './pages/actualites/actualites.component';
import { DarkModeComponent } from './ui/dark-mode/dark-mode.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListArticleComponent } from './pages/article/list-article/list-article.component';
import { AddArticleComponent } from './pages/article/add-article/add-article.component';
import { UpdateArticleComponent } from './pages/article/update-article/update-article.component';
import { CommentsComponent } from './article/comments/comments.component';
import { CommentComponent } from './article/comment/comment.component';
import { ArtComponent } from './article/art/art.component';
import { CommonModule } from '@angular/common';
import { FormCommentComponent } from './article/form-comment/form-comment.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { GouvernoratComponent } from './admin/gouvernorat/gouvernorat.component';
import { DelegationComponent } from './admin/delegation/delegation.component';
import { AddDelegationComponent } from './admin/add-delegation/add-delegation.component';
import { FilterComponent } from './pages/nos-produits/filter/filter.component';
import { ProduitsFiltredComponent } from './pages/nos-produits/produits-filtred/produits-filtred.component';
import { ProduitByIdComponent } from './pages/nos-produits/produit-by-id/produit-by-id.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';
import { MouteurComponent } from './admin/mouteur/mouteur.component';
import { AddMoteurComponent } from './admin/add-moteur/add-moteur.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProduitsComponent,
    AddProduitComponent,
    LoginComponent,
    ProfileComponent,
    UpdateProduitComponent,
    ForbiddenComponent,
    UtilisateursComponent,
    PieceComponent,
    InscriptionComponent,
    ListeCategorieComponent,
    UpdateCategorieComponent,
    AddCategorieComponent,
    AddMarqueComponent,
    ListMarqueComponent,
    UpdateMarqueComponent,
    AddUserComponent,
    DashboardComponent,
    FooterComponent,
    SlideComponent,
    NosProduitsComponent,
    ListModeleComponent,
    TestComponent,
    UpdateUserComponent,
    FiltreComponent,
    AddModeleComponent,
    UpdateImageComponent,
    UpdatePasswordComponent,
    ContactComponent,
    ListContactComponent,
    AjouterProduitFrontComponent,
    BlogComponent,
    ActualitesComponent,
    DarkModeComponent,
    ListArticleComponent,
    AddArticleComponent,
    UpdateArticleComponent,
    CommentsComponent,
    CommentComponent,
    ArtComponent,
    FormCommentComponent,
    CreateArticleComponent,
    GouvernoratComponent,
    DelegationComponent,
    AddDelegationComponent,
    FilterComponent,
    ProduitsFiltredComponent,
    ProduitByIdComponent,
    ViewUserComponent,
    MouteurComponent,
    AddMoteurComponent,
   
    
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    CommonModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
