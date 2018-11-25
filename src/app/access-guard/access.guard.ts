import {
  Injectable,
  Injector
} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import {
  AuthService
} from '../services/auth/auth.service';
import {
  User
} from '../classes/user/user';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(
    private router: Router,
    private injector: Injector,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable < boolean > | Promise < boolean > | boolean {
    const requiresLogin = route.data.requiresLogin || false;
    const requiresInventoryManagerRoleTF = route.data.requiresInventoryManagerRoleTF || false;
    const requiresManagerRoleTF = route.data.requiresManagerRoleTF || false;
    const requiresSuperAdminRoleTF = route.data.requiresSuperAdminRoleTF || false;
    if (requiresLogin) {
      const auth = this.injector.get(AuthService);
      const currentUser: User = auth.getCurrentUser();
      if (currentUser) {
        if (currentUser.success) {
          if (requiresSuperAdminRoleTF) {
            if (currentUser.role === 'SuperAdmin') {
              return true;
            } else {
              localStorage.clear();
              this.router.navigate(['/login']);
              return false;
            }
          } else if (requiresManagerRoleTF) {
            if (currentUser.role === 'Manager' || currentUser.role === 'SuperAdmin') {
              return true;
            } else {
              localStorage.clear();
              this.router.navigate(['/login']);
              return false;
            }
          } else if (requiresInventoryManagerRoleTF) {
            if (currentUser.role === 'Manager' || currentUser.role === 'SuperAdmin' || currentUser.role === 'Inventory Manager') {
              return true;
            } else {
              localStorage.clear();
              this.router.navigate(['/login']);
              return false;
            }
          } else {
            return true;
          }
        } else {
          localStorage.clear();
          this.router.navigate(['/login']);
          return false;
        }
      } else {
        localStorage.clear();
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      return true;
    }
  }
}
