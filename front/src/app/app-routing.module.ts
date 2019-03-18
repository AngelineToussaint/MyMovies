import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import {MemberComponent} from './member/member.component';
import {MoviesComponent} from './movies/movies.component';
import {MovieComponent} from './movie/movie.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'membres', component: MembersComponent },
  { path: 'membre/:id', component: MemberComponent },
  { path: 'films', component: MoviesComponent },
  { path: 'film/:id', component: MovieComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
