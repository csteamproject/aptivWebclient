import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  LoginComponent
} from './pages/login/login.component';
import {
  InventoryComponent
} from './pages/inventory/inventory.component';
import {
  NotFoundComponent
} from './not-found';
import {
  UsersComponent
} from './pages/users/users.component';
import {
  LocationsComponent
} from './pages/locations/locations.component';
import {
  AccessGuard
} from './access-guard/access.guard';



const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  canActivate: [AccessGuard]
}, {
  path: 'inventory',
  component: InventoryComponent,
  data: {
    requiresLogin: true
  },
  canActivate: [AccessGuard]
}, {
  path: 'locations',
  component: LocationsComponent,
  data: {
    requiresLogin: true
  },
  canActivate: [AccessGuard]
}, {
  path: 'users',
  component: UsersComponent,
  data: {
    requiresLogin: true
  },
  canActivate: [AccessGuard]
}, {
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
