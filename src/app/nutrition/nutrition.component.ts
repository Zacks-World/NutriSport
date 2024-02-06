import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-nutrition',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.css'
})
export class NutritionComponent {
  userData: {
    nom: string;
    age: number;
    sexe: string;
    poids: string;
    groupeSanguin: string;
    allergies: string;
    nombreRepas: number;
    eauQuotidienne: number;
  } = {
    nom: '',
    age: 0,
    sexe: '',
    poids: '',
    groupeSanguin: '',
    allergies: '',
    nombreRepas: 1,
    eauQuotidienne: 0
  };



  allergiies: string[] = [
    'Arachides',
    'Lait',
    'Oeufs',
    'Blé',
    'Soja',
    'Fruits à coque',
    'Poisson',
    'Crustacés',
    'Mollusques',
    'Sésame',
    'Sulfites',
    'Moutarde',
    'Céleri',
    'Lupin',
    'None'
  ];
  sang: string[] = [
    'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
  ];
  poids: string[] = [
    'Moins de 50 kg',
    '50 - 60 kg',
    '60 - 70 kg',
    '70 - 80 kg',
    '80 - 90 kg',
    'Plus de 90 kg'
  ];
  genres: string[] = ['Masculin', 'Féminin'];
  objectifs: string[] = ['Perte de poids',
    'Prise de masse musculaire',
    'Maintien un poids healthy',
    'Gestion de conditions médicales',
    'Amélioration de la santé digestive',
    'Énergie et performance',
    'Alimentation équilibrée',
    'Réduction de la consommation de sucre et de sel',
    'Autre'
  ]




  submitted = false;

  onSubmit() { this.submitted = true; }
}
