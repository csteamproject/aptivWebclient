import { NgModule } from '@angular/core';

// Declarations
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found';
import { TestingComponent } from './testing/testing.component';
import { AptivComponentsModule } from './components/aptiv-components/aptiv-components.module';
import { AccountComponent } from './pages/account/account.component';

// Providers

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    MainComponent,
    TestingComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AptivComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
