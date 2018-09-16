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

@NgModule({
  imports: [
    CommonModule
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
