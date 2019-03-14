import {Input, NgModule} from '@angular/core';
import {
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatGridListModule,
  MatButtonModule, MatInputModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialModule {
}
