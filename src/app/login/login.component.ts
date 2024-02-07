import { Component,OnInit } from '@angular/core';
import { FormBuilder ,FormGroup} from '@angular/forms';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
   
  userFormGroup! : FormGroup;

  constructor(private fb : FormBuilder, private auth: AuthentificationService){}
  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")

    })
  }
  handleLogin(): void{
      
        let user= this.userFormGroup.value.username;
        let password=this.userFormGroup.value.password; 
        this.auth.login(user, password).subscribe({
          next:()=>{

          },
          error :(err: any)=>{
            console.error('Login error:', err);

          }
        });
      }

    }
  
