import {Input, NgModule} from '@angular/core';
import {
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatGridListModule, MatSliderModule, MatSnackBarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSliderModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {
}
