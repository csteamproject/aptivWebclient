import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  LocationsComponent
} from './locations.component';
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
  InventoryComponent
} from '../inventory/inventory.component';
import {
  ExcelService
} from 'src/app/services/excel/excel.service';

describe('LocationsComponent', () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture < LocationsComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [LocationsComponent,
          LoginComponent,
          InventoryComponent,
          AccountComponent,
          UsersComponent,
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
        }, ExcelService],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
