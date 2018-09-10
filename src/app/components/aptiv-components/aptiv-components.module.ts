import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  AptivTableComponent
} from './aptiv-table/aptiv-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AptivTableComponent
  ],
  declarations: [
    AptivTableComponent
  ]
})
export class AptivComponentsModule {}
