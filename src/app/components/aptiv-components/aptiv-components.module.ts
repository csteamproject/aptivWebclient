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
  AddItemModalComponent
} from './add-item-modal/add-item-modal.component';
import {
  AddLocationModalComponent
} from './add-location-modal/add-location-modal.component';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  DeleteModalComponent
} from './delete-modal/delete-modal.component';
import {
  EditItemModalComponent
} from './edit-item-modal/edit-item-modal.component';
import {
  EditLocationModalComponent
} from './edit-location-modal/edit-location-modal.component';
import {
  DeleteLocationModalComponent
} from './delete-location-modal/delete-location-modal.component';
import {
  AptivInventoryTableComponent
} from './aptiv-inventory-table/aptiv-inventory-table.component';
import {
  AptivLocationsTableComponent
} from './aptiv-locations-table/aptiv-locations-table.component';
import {
  AptivUsersTableComponent
} from './aptiv-users-table/aptiv-users-table.component';
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
    AptivInventoryTableComponent,
    AptivLocationsTableComponent,
    AptivUsersTableComponent,
    HeaderBarComponent,
    NavBarComponent,
    AddItemModalComponent,
    AddLocationModalComponent,
    EditLocationModalComponent,
    DeleteLocationModalComponent,
    EditItemModalComponent,
    DeleteModalComponent
  ],
  declarations: [
    AptivTableComponent,
    AptivInventoryTableComponent,
    AptivUsersTableComponent,
    HeaderBarComponent,
    NavBarComponent,
    AddItemModalComponent,
    EditItemModalComponent,
    DeleteModalComponent,
    DeleteLocationModalComponent,
    AptivLocationsTableComponent,
    AddLocationModalComponent,
    EditLocationModalComponent
  ]
})
export class AptivComponentsModule {}
