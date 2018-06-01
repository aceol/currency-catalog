import { Component, OnInit, NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { Currency, DataCurrencies } from '../../assets/Currency';
import {CurrencyService} from '../services/currency.service';

@NgModule({
  imports: [
    CommonModule
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


  constructor(private currencyService: CurrencyService) {
    this.title = 'Available currencies';
    this.currentPage = 1;
    this.pageSize = 10;
  }


  getCurrencies (data = null) {
    if (data) {
      this.currentPage = data.pageIndex;
      this.pageSize = data.pageSize;
    }

    this.currencyService.getCurrencies({currentPage: this.currentPage, pageSize: this.pageSize, }).subscribe(
      value => {
        this.currencies = value.data;
        this.nbCurrencies = value.meta.total;
      });
  }

  ngOnInit() {
    this.getCurrencies();
  }

}
