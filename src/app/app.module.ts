import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SportComponent } from './sport/sport.component';
<<<<<<< HEAD
import { NutritionComponent } from './nutrition/nutrition.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MenueComponent } from './menue/menue.component';
import { AuthentificationComponent } from './authentification/authentification.component';

=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 9149ea36e7fb4bdf116274f733dc746fa27822e8

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SportComponent,
<<<<<<< HEAD
    NutritionComponent,
    LoginComponent,
    AcceuilComponent,
    MenueComponent,
    AuthentificationComponent,
=======
>>>>>>> 9149ea36e7fb4bdf116274f733dc746fa27822e8
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
)
export class AppModule { }
