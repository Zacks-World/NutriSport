import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SportComponent } from './sport/sport.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MenueComponent } from './menue/menue.component';
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
}
)
export class AppModule { }
