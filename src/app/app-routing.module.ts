import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MenueComponent } from './menue/menue.component';
import {AuthentificationService } from './authentification.service';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SigninComponent } from './signin/signin.component';
const routes: Routes = [
  {path : "navbar", component : NavbarComponent},
  {path : "login", component : LoginComponent},
  {path : "", component : AcceuilComponent},
  {path : "menue", component : MenueComponent},
  {path :"signin",component :SigninComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthentificationService],
})
export class AppRoutingModule { }
