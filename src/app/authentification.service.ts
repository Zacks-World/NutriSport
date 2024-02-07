import { Injectable } from '@angular/core';
import { AppUser } from '../bd/bd_login';
import { Observable, of, throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  users : AppUser[]=[];
  authenticatedUser:AppUser | undefined;

  constructor() { 
    this.users.push({ userId: uuidv4(), username: "user1", password: "mynutrisport", roles: ["USER"] });
    this.users.push({userId: uuidv4(),username:"user2",password:"mynutrisport",roles:["USER"]})
    this.users.push({userId: uuidv4(),username:"admin",password:"mynutrisport",roles:["USER","ADMIN"]})
  }
  public login(username:string,password:string):Observable<AppUser>{
    let user=this.users.find(u=>u.username==username);
    if(!user) return throwError(()=>new Error("User not found"));
    if (user.password!=password){
      return throwError(()=>new Error('Incorrect password'));

    }
    return of(user);
  }
  public authenticateUser({ user }: { user: AppUser; }):Observable<boolean>{
    this.authenticatedUser=user;
    localStorage.setItem("authUser",JSON.stringify({username:user.username,roles:user.roles}))
    return of(true);
  }
public isAuthenticated():boolean{
  return this.authenticatedUser !== undefined;
}
}
