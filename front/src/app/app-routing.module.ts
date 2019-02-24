import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MembersComponent} from './members/members.component';

const routes: Routes = [
  {path: 'membres', component: MembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
