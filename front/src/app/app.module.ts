import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MzButtonModule, MzCheckboxModule } from 'ngx-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { Config, ConfigFactory } from "./config";

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MzButtonModule,
    MzCheckboxModule
  ],
  providers: [
    Config,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigFactory,
      deps: [Config, HttpClient],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
