import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Currency, DataCurrency } from '../../assets/Currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  curr: String;
  currency: Currency;

  constructor(private route: ActivatedRoute, private http: HttpClient,) {
    this.curr = 'toto';

    this.route.params.subscribe( params => {
      this.curr = params.curr;
      this.getData(this.curr);
    });
  }

  getData(curr: String){
    this.http.get<DataCurrency>('https://api.openfintech.io/v1/currencies/' + curr).subscribe(
      value => {
        this.currency = value.data;
      });
  }

  ngOnInit() {
  }

}
