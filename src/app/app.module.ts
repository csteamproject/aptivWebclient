import {
  NgModule
} from '@angular/core';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';

// Declarations
import {
  AppComponent
} from './app.component';
import {
  NotFoundComponent
} from './not-found';
import {
  LoginComponent
} from './pages/login/login.component';
import {
  InventoryComponent
} from './pages/inventory/inventory.component';
import {
  TestingComponent
} from './testing/testing.component';
import {
  AccountComponent
} from './pages/account/account.component';

// Imports
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  AppRoutingModule
} from './app-routing.module';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  AptivComponentsModule
} from './components/aptiv-components/aptiv-components.module';
import {
  FormsModule
} from '@angular/forms';
import {
  InventoryTypesComponent
} from './pages/inventory-types/inventory-types.component';

// Providers

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    InventoryComponent,
    TestingComponent,
    AccountComponent,
    InventoryTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AptivComponentsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
