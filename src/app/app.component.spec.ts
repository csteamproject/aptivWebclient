import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AptivComponentsModule } from './components/aptiv-components/aptiv-components.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { TestingComponent } from './testing/testing.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './not-found';
import { APP_BASE_HREF } from '@angular/common';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        NotFoundComponent,
        MainComponent,
        AccountComponent,
        TestingComponent
      ],
      imports: [
        AptivComponentsModule,
        AppRoutingModule,
        FormsModule
      ],
      providers:  [{ provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
