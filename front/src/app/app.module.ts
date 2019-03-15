import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MembersComponent } from './members/members.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberComponent } from './member/member.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MovieComponent } from './movie/movie.component';
import { CommentComponent } from './comment/comment.component';
import { MoviesComponent } from './movies/movies.component';
import {FrCurrency} from './fr-currency';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MembersComponent,
    MemberComponent,
    SidebarComponent,
    MovieComponent,
    CommentComponent,
    MoviesComponent,
    FrCurrency
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
