import { Component, OnInit, NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Currency, DataCurrencies } from '../../assets/Currency';

@NgModule({
  imports: [
    CommonModule,
    HttpClient
  ]
})

@Component({
  selector: 'app-available-currencies',
  templateUrl: './available-currencies.component.html',
  styleUrls: ['./available-currencies.component.css']
})

export class AvailableCurrenciesComponent implements OnInit {

  title: String;
  currencies: Array<Currency>;

  constructor(private http: HttpClient,) {
    this.title = 'Available currencies';
    this.getCurrencies();
  }

  getCurrencies () {
    this.http.get<DataCurrencies>('https://api.openfintech.io/v1/currencies').subscribe(
      value => {
        this.currencies = value.data;
      });
  }

  ngOnInit() {
  }

}
