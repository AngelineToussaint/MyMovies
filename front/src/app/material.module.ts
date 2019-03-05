import {Input, NgModule} from '@angular/core';
import {MatToolbarModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule
  ]
})
export class MaterialModule {
}
