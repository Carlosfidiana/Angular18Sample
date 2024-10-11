
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
   let authS = inject(AuthService);
   let router = inject(Router);
   if(!authS.isLoggedIn){
     router.navigate(['login']);
   }
   return true;
};
