import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isUserLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      this.authService.isUserLoggedIn.subscribe((isUserLoggedInFromService: boolean) => {
          this.isUserLoggedIn = isUserLoggedInFromService;
      })

      // if user is logged in, return true and expose /products url/link for user to access
      if(this.isUserLoggedIn) {
        return true;
      }

      // if user is not logged in, return false and navigate user to login page
        this.router.navigate(['login']);
        return false;
  }
  
}
