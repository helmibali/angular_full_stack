import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import { AddCategorieComponent } from './pages/categorie/add-categorie/add-categorie.component';
import { ListeCategorieComponent } from './pages/categorie/liste-categorie/liste-categorie.component';
import { UpdateCategorieComponent } from './pages/categorie/update-categorie/update-categorie.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { AddMarqueComponent } from './pages/marque/add-marque/add-marque.component';
import { ListMarqueComponent } from './pages/marque/list-marque/list-marque.component';
import { UpdateMarqueComponent } from './pages/marque/update-marque/update-marque.component';
import { ListModeleComponent } from './pages/modele/list-modele/list-modele.component';
import { NosProduitsComponent } from './pages/nos-produits/nos-produits.component';
import { PieceComponent } from './pages/piece/piece.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
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
  {path:"modifier-utilisateur/:user_id" ,component:UpdateUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
