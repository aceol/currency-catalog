import { Injectable, Inject } from '@angular/core';

const URL = 'https://api.openfintech.io/v1';
import {HttpClient} from '@angular/common/http';
import { DataCurrency, DataCurrencies } from '../../assets/Currency';
import {Observable} from 'rxjs';

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) {
  }

  getCurrency(curr): Observable<DataCurrency> {
    return this.http.get<DataCurrency>(`${URL}/currencies/${curr}`);
  }

  getCurrencies({currentPage, pageSize}): Observable<DataCurrencies> {
    return this.http.get<DataCurrencies>(`${URL}/currencies?page[${currentPage}]=1&page[size]=${pageSize}`);
  }
}
