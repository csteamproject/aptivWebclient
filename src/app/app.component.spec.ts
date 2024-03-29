import {
  TestBed,
  async
} from '@angular/core/testing';
import {
  AppComponent
} from './app.component';
import {
  AptivComponentsModule
} from './components/aptiv-components/aptiv-components.module';
import {
  AppRoutingModule
} from './app-routing.module';
import {
  FormsModule
} from '@angular/forms';
import {
  LoginComponent
} from './pages/login/login.component';
import {
  AccountComponent
} from './pages/account/account.component';
import {
  InventoryComponent
} from './pages/inventory/inventory.component';
import {
  UsersComponent
} from './pages/users/users.component';
import {
  NotFoundComponent
} from './not-found';
import {
  APP_BASE_HREF
} from '@angular/common';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  LocationsComponent
} from './pages/locations/locations.component';

describe('AppComponent', () => {
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        NotFoundComponent,
        InventoryComponent,
        AccountComponent,
        UsersComponent,
        LocationsComponent
      ],
      imports: [
        AptivComponentsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
      }],
    }).compileComponents();
  }));
  it('should create the app', async (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
