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
import {
  EditModalComponent
} from './edit-modal/edit-modal.component';
import {
  DeleteModalComponent
} from './delete-modal/delete-modal.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';

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
    AddModalComponent,
    EditModalComponent,
    EditItemModalComponent,
    DeleteModalComponent
  ],
  declarations: [
    AptivTableComponent,
    HeaderBarComponent,
    NavBarComponent,
    AddModalComponent,
    EditModalComponent,
    EditItemModalComponent,
    DeleteModalComponent
  ]
})
export class AptivComponentsModule {}
