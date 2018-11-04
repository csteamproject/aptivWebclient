import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  AptivTableComponent
} from './aptiv-table/aptiv-table.component';
import {
  HeaderBarComponent
} from './header-bar/header-bar.component';
import {
  NavBarComponent
} from './nav-bar/nav-bar.component';
import {
  AppRoutingModule
} from 'src/app/app-routing.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  AddModalComponent
} from './add-modal/add-modal.component';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    AptivTableComponent,
    HeaderBarComponent,
    NavBarComponent,
    AddModalComponent
  ],
  declarations: [
    AptivTableComponent,
    HeaderBarComponent,
    NavBarComponent,
    AddModalComponent
  ]
})
export class AptivComponentsModule {}
