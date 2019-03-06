import {Input, NgModule} from '@angular/core';
import {MatToolbarModule, MatListModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule {
}
