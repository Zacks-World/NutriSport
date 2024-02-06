import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NutritionComponent} from "./nutrition/nutrition.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NutritionComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NutriSport';
}
