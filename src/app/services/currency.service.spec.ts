import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {CurrencyService, URL} from "./currency.service";

describe(`CurrencyService`, () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [ CurrencyService ]
    });
  });

  it(`should fetch a currency`,
    async(
      inject([CurrencyService, HttpClient, HttpTestingController],
        (
          currencyService: CurrencyService,
          http: HttpClient,
          backend: HttpTestingController
        ) => {

        currencyService.getCurrency('EUR').subscribe();
        backend.expectOne({
          url: `${URL}/EUR`
        });

      })
    )
  );

  it(`should fetch currencies`,
    async(
      inject([CurrencyService, HttpClient, HttpTestingController],
        (
          currencyService: CurrencyService,
          http: HttpClient,
          backend: HttpTestingController
        ) => {

        const currentPage = 2;
        const pageSize = 200;

        currencyService.getCurrencies({currentPage, pageSize}).subscribe();

        backend.expectOne({
          url: `${URL}?page[number]=${currentPage}&page[size]=${pageSize}`
        });

      })
    )
  );

});
