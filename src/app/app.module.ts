import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import {RoutingRoutingModule} from "./routing/routing-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    RoutingRoutingModule
  ],
  declarations: [ AppComponent],
  bootstrap: [ AppComponent]
})
export class AppModule { }
