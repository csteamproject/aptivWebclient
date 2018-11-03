import {
  TestBed,
  async,
  inject
} from '@angular/core/testing';

import {
  AccessGuard
} from './access.guard';
import {
  AppRoutingModule
} from '../app-routing.module';
import {
  LoginComponent
} from '../pages/login/login.component';
import {
  InventoryComponent
} from '../pages/inventory/inventory.component';
import {
  TestingComponent
} from '../testing/testing.component';
import {
  AccountComponent
} from '../pages/account/account.component';
import {
  NotFoundComponent
} from '../not-found';
import {
  FormsModule
} from '@angular/forms';
import {
  AptivComponentsModule
} from '../components/aptiv-components/aptiv-components.module';
import {
  APP_BASE_HREF
} from '@angular/common';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  InventoryTypesComponent
} from '../pages/inventory-types/inventory-types.component';

describe('AccessGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        InventoryComponent,
        TestingComponent,
        AccountComponent,
        InventoryTypesComponent,
        NotFoundComponent
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        AptivComponentsModule,
        HttpClientModule
      ],
      providers: [AccessGuard, {
        provide: APP_BASE_HREF,
        useValue: '/'
      }]
    });
  });

  it('should ...', inject([AccessGuard], (guard: AccessGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('When going to a page not required to login it should return true', inject([AccessGuard], (guard: AccessGuard) => {
    // Arrange
    // Act
    // const accessTF = guard.canActivate();
    // Assert
  }));
});
