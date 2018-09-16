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
  MainComponent
} from './pages/main/main.component';
import {
  NotFoundComponent
} from './not-found';
import {
  TestingComponent
} from './testing/testing.component';
import {
  AccountComponent
} from './pages/account/account.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
  // data: {requiresLogin: true},
  // canActivate: [ AccessGuard ]
}, {
  path: 'main',
  component: MainComponent
  // data: {requiresLogin: true},
  // canActivate: [ AccessGuard ]
}, {
  path: 'testing',
  component: TestingComponent
  // data: {requiresLogin: true},
  // canActivate: [ AccessGuard ]
}, {
  path: 'account',
  component: AccountComponent
  // data: {requiresLogin: true},
  // canActivate: [ AccessGuard ]
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
