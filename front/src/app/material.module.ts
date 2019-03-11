import {Input, NgModule} from '@angular/core';
import {MatToolbarModule, MatListModule, MatIconModule, MatCardModule, MatTabsModule, MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule
  ]
})
export class MaterialModule {
}
