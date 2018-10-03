import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  LoginComponent
} from './login.component';
import {
  FormsModule
} from '@angular/forms';
import {
  AppRoutingModule
} from '../../app-routing.module';
import {
  MainComponent
} from '../main/main.component';
import { TestingComponent } from '../../testing/testing.component';
import { NotFoundComponent } from '../../not-found';
import { AccountComponent } from '../account/account.component';
import { AptivComponentsModule } from '../../components/aptiv-components/aptiv-components.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture < LoginComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [
          LoginComponent,
          MainComponent,
          TestingComponent,
          AccountComponent,
          NotFoundComponent
        ],
        imports: [
          FormsModule,
          AppRoutingModule,
          AptivComponentsModule,
          HttpClientModule
        ],
        providers:  [{ provide: APP_BASE_HREF, useValue: '/' }],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
