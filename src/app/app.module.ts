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
  LocationsComponent
} from './pages/locations/locations.component';
import {
  UsersComponent
} from './pages/users/users.component';
import { ExcelService } from './services/excel/excel.service';
// Providers

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    InventoryComponent,
    LocationsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AptivComponentsModule,
    FormsModule,
    NgbModule
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule {}
