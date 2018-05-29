import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RoutingRoutingModule} from './routing/routing-routing.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule, MatButtonModule, } from '@angular/material';
@NgModule({
  imports: [
    BrowserModule,
    RoutingRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
  ],
  declarations: [ AppComponent],
  bootstrap: [ AppComponent]
})
export class AppModule { }
