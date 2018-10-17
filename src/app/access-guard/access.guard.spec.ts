import { TestBed, async, inject } from '@angular/core/testing';

import { AccessGuard } from './access.guard';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from '../pages/login/login.component';
import { MainComponent } from '../pages/main/main.component';
import { TestingCompiler } from '@angular/core/testing/src/test_compiler';
import { TestingComponent } from '../testing/testing.component';
import { AccountComponent } from '../pages/account/account.component';
import { NotFoundComponent } from '../not-found';
import { FormsModule } from '@angular/forms';
import { AptivComponentsModule } from '../components/aptiv-components/aptiv-components.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('GuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        MainComponent,
        TestingComponent,
        AccountComponent,
        NotFoundComponent
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        AptivComponentsModule,
        HttpClientModule
      ],
      providers: [AccessGuard, { provide: APP_BASE_HREF, useValue: '/' }]
    });
  });

  it('should ...', inject([AccessGuard], (guard: AccessGuard) => {
    expect(guard).toBeTruthy();
  }));
});