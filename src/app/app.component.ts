import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NutritionComponent} from "./nutrition/nutrition.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {AppModule} from "./app.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NutritionComponent,
    AppModule
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NutriSport';
}
