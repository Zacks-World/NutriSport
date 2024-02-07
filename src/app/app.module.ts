import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
=======
import { SportComponent } from './sport/sport.component';
import { NutritionComponent } from './nutrition/nutrition.component';
>>>>>>> bf52287f9b037713777b670dce5395a61a3acb1a
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MenueComponent } from './menue/menue.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AcceuilComponent,
    MenueComponent,
    SigninComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
}
=======
import { AuthentificationComponent } from './authentification/authentification.component';

@NgModule({
    declarations: [
      NavbarComponent,
      FooterComponent,
      LoginComponent,
      AcceuilComponent,
      MenueComponent,
      AuthentificationComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      NutritionComponent,
      AppComponent,
    ],
    providers: [
      provideClientHydration()
    ],
    exports: [
      NavbarComponent,
      AuthentificationComponent,
      AuthentificationComponent
    ]
  }
>>>>>>> bf52287f9b037713777b670dce5395a61a3acb1a
)
export class AppModule { }
