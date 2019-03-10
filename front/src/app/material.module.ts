import {Input, NgModule} from '@angular/core';
import {MatToolbarModule, MatListModule, MatIconModule, MatCardModule, MatTabsModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule
  ]
})
export class MaterialModule {
}
