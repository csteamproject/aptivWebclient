import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  InventoryComponent
} from './inventory.component';
import {
  AptivComponentsModule
} from '../../components/aptiv-components/aptiv-components.module';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  LoginComponent
} from '../login/login.component';
import {
  AccountComponent
} from '../account/account.component';
import {
  NotFoundComponent
} from 'src/app/not-found';
import {
  FormsModule
} from '@angular/forms';
import {
  AppRoutingModule
} from 'src/app/app-routing.module';
import {
  APP_BASE_HREF
} from '@angular/common';
import {
  UsersComponent
} from '../users/users.component';
import {
  LocationsComponent
} from '../locations/locations.component';

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture < InventoryComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [InventoryComponent,
          LoginComponent,
          AccountComponent,
          UsersComponent,
          LocationsComponent,
          NotFoundComponent
        ],
        imports: [
          AptivComponentsModule,
          FormsModule,
          AppRoutingModule,
          HttpClientModule
        ],
        providers: [{
          provide: APP_BASE_HREF,
          useValue: '/'
        }],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
