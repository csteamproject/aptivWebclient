import { Injectable, Injector } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../classes/user/user';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(
    private router: Router,
    private injector: Injector,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const requiresLogin = route.data.requiresLogin || false;
      if (requiresLogin) {
        const auth = this.injector.get(AuthService);
        const currentUser: User = auth.getCurrentUser();
        if (currentUser) {
          if (currentUser.token.success) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      } else {
        return true;
      }
  }
}
