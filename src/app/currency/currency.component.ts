import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  curr: String;

  constructor(private route: ActivatedRoute) {
    this.curr = 'toto';
    this.route.params.subscribe( params => {
      this.curr = params.curr;
    } );
  }

  ngOnInit() {
  }

}
