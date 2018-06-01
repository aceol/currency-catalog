import { Injectable, Inject } from '@angular/core';

export const URL = 'https://api.openfintech.io/v1/currencies';
import {HttpClient} from '@angular/common/http';
import { DataCurrency, DataCurrencies } from '../../assets/Currency';
import {Observable} from 'rxjs';

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) {
  }

  getCurrency(curr): Observable<DataCurrency> {
    return this.http.get<DataCurrency>(`${URL}/${curr}`);
  }

  getCurrencies({currentPage, pageSize}): Observable<DataCurrencies> {
    return this.http.get<DataCurrencies>(`${URL}?page[number]=${currentPage}&page[size]=${pageSize}`);
  }
}
