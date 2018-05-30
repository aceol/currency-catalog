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
  currentPage: Number;
  pageSize: Number;
  nbCurrencies: Number;


  constructor(private http: HttpClient) {
    this.title = 'Available currencies';
    this.getCurrencies();
    this.currentPage = 1;
    this.pageSize = 200;
  }

  getCurrencies (data = null) {
    if (data) {
      this.currentPage = data.pageIndex;
    }

    this.http.get<DataCurrencies>(`https://api.openfintech.io/v1/currencies?page[${this.currentPage}]=1&page[size]=${this.pageSize}`).subscribe(
      value => {
        this.currencies = value.data;
        this.nbCurrencies = value.meta.total;
      });
  }

  ngOnInit() {
  }

}
