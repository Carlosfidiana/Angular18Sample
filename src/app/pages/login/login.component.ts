import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { routes } from '../../app.routes';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule,CardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 

  constructor(private auth:AuthService,private router:Router){ 
    if(this.auth.isLoggedIn){
      this.router.navigate(['']);
    }
  }
  login(){
    this.auth.login();
  }
  
}
