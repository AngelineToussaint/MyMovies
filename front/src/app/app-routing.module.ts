import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import {MemberComponent} from './member/member.component';

const routes: Routes = [
  { path: 'membres', component: MembersComponent },
  { path: 'membre/:id', component: MemberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
