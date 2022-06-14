import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ArtComponent } from './article/art/art.component';
import { ArticleComponent } from './article/article/article.component';
import { CommentsComponent } from './article/comments/comments.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ActualitesComponent } from './pages/actualites/actualites.component';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import { AddArticleComponent } from './pages/article/add-article/add-article.component';
import { ListArticleComponent } from './pages/article/list-article/list-article.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AddCategorieComponent } from './pages/categorie/add-categorie/add-categorie.component';
import { ListeCategorieComponent } from './pages/categorie/liste-categorie/liste-categorie.component';
import { UpdateCategorieComponent } from './pages/categorie/update-categorie/update-categorie.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ListContactComponent } from './pages/list-contact/list-contact.component';
import { LoginComponent } from './pages/login/login.component';
import { AddMarqueComponent } from './pages/marque/add-marque/add-marque.component';
import { ListMarqueComponent } from './pages/marque/list-marque/list-marque.component';
import { UpdateMarqueComponent } from './pages/marque/update-marque/update-marque.component';
import { AddModeleComponent } from './pages/modele/add-modele/add-modele.component';
import { ListModeleComponent } from './pages/modele/list-modele/list-modele.component';
import { NosProduitsComponent } from './pages/nos-produits/nos-produits.component';
import { PieceComponent } from './pages/piece/piece.component';
import { AjouterProduitFrontComponent } from './pages/produits/ajouter-produit-front/ajouter-produit-front.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { UpdateImageComponent } from './pages/user/update-image/update-image.component';
import { UpdatePasswordComponent } from './pages/user/update-password/update-password.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { ProduitGuard } from './produit.guard';
import { TestComponent } from './test/test.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"produits",component:ProduitsComponent,canActivate:[ProduitGuard]},
  {path:"ajouter",component:AddProduitComponent,canActivate:[ProduitGuard]},
  {path:"ajouter-categorie",component:AddCategorieComponent},
  {path:"inscription",component:AddUserComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent,canActivate:[ProduitGuard]},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'utilisateurs', component: UtilisateursComponent},
  {path: 'pieces', component: PieceComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'categories', component: ListeCategorieComponent},
  {path: 'marques', component: ListMarqueComponent},
  {path: 'ajouter-marque', component: AddMarqueComponent},
  {path:"updateProduit/:id", component: UpdateProduitComponent,canActivate:[ProduitGuard]},
  {path:"updateMarque/:id", component:UpdateMarqueComponent },
  {path:"nos-produits", component:NosProduitsComponent },
  {path:"updateCategorie/:id", component:UpdateCategorieComponent },
  {path:"modeles",component:ListModeleComponent},
  {path:"test",component:TestComponent},
  {path:"modifier-utilisateur/:user_id" ,component:UpdateUserComponent},
  {path:"modifier-image-utilisateur/:user_id" ,component:UpdateImageComponent},
  {path:"update-password",component:UpdatePasswordComponent},
  {path:"contact",component:ContactComponent},
  {path:"contact-liste",component:ListContactComponent},
  {path:"creer-annonce",component:AjouterProduitFrontComponent},
  {path:"actualite",component:ArtComponent},
  {path:"actualites",component:ActualitesComponent},
  {path:"ajouter-modele" , component:AddModeleComponent},
  {path:"articles",component:ListArticleComponent},
  {path:"ajouter-article",component:AddArticleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
