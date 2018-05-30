import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from '../currency/currency.component';
import { AvailableCurrenciesComponent } from '../available-currencies/available-currencies.component';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule, MatListModule, MatChipsModule } from '@angular/material';

const routes: Routes = [
  {
    path: 'currency/:curr',
    component: CurrencyComponent
  }, {
    path: 'currencies',
    component: AvailableCurrenciesComponent
  }
];

@NgModule({
  declarations: [
    CurrencyComponent,
    AvailableCurrenciesComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MatGridListModule,
    MatListModule,
    MatChipsModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
