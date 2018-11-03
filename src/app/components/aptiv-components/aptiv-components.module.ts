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
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    AptivTableComponent,
    HeaderBarComponent,
    NavBarComponent
  ],
  declarations: [
    AptivTableComponent,
    HeaderBarComponent,
    NavBarComponent
  ]
})
export class AptivComponentsModule {}
