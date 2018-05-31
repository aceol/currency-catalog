import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { Currency } from '../../assets/Currency';
import {CurrencyService} from '../services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  curr: String;
  currency: Currency;

  constructor(private route: ActivatedRoute, private currencyService: CurrencyService) {
    this.curr = 'toto';
  }

  getData(curr: String) {
    this.curr = curr;
    console.log('=====> inside get data');
    const currencyObs = this.currencyService.getCurrency(curr);
    console.log(currencyObs);
    currencyObs.subscribe(value => {
      (this.currency = value.data);
      console.log('inside get data getCurrency callback =======>', value.data);
    });
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.curr = params.curr;
      // FIXME
      //  this.getData(this.curr);
    });
  }

}
