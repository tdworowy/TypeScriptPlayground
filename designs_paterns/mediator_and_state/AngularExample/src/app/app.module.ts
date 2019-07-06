import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component'
import { SideNavComponent } from './sidenav.component'
import { RightScreenComponent } from './rightscreen.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    RightScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
