import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  AptivInputBoxComponent
} from './aptiv-input-box/aptiv-input-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AptivInputBoxComponent
  ],
  declarations: [
    AptivInputBoxComponent
  ]
})
export class AptivComponentsModule {}
