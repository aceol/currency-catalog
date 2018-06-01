import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { Currency } from '../../assets/Currency';
import {CurrencyService} from '../services/currency.service';


/**
 * Composant representant une Currency
 */
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  curr: String;
  currency: Currency;

  constructor(private route: ActivatedRoute, private currencyService: CurrencyService) {
  }

  getData(curr: String) {
    this.curr = curr;
    const currencyObs = this.currencyService.getCurrency(curr);
    currencyObs.subscribe(value => (this.currency = value.data));
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.curr = params.curr;
      //this.getData(this.curr);
    });
  }

}
