import { Injectable } from '@angular/core';
import { AppUser } from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  users : AppUser[]=[];

  constructor() { 
    this.users.push({userId: UUID.UUID(),username:"user1",password:"mynutrisport"})
  }
}
