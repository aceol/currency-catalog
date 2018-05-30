import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingRoutingModule } from './routing/routing-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatMenuModule, MatButtonModule, MatListModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    RoutingRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule
  ],
  exports: [
    MatGridListModule
  ],
  declarations: [ AppComponent],
  bootstrap: [ AppComponent]
})
export class AppModule { }
