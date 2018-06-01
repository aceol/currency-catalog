import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { AvailableCurrenciesComponent } from './available-currencies.component';
import {MatPaginatorModule, MatGridListModule } from '@angular/material';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {CurrencyService} from "../services/currency.service";
import {Currency, DataCurrencies, Meta} from "../../assets/Currency";
import {Observable} from "rxjs/internal/Observable";
import {RouterModule} from "@angular/router";

describe('AvailableCurrenciesComponent', () => {
  let component: AvailableCurrenciesComponent;
  let fixture: ComponentFixture<AvailableCurrenciesComponent>;

  class MockAuthService extends CurrencyService {
    getCurrencies({currentPage, pageSize}): Observable<DataCurrencies> {
      const dataCurrencies = new DataCurrencies();
      dataCurrencies.data = new Array<Currency>();
      dataCurrencies.meta = new Meta();
      dataCurrencies.meta.total = 50;
      return Observable.create(function(observer) {
        observer.next(dataCurrencies);
      });
    }
  }

  beforeEach(async (() => {

    TestBed.configureTestingModule({
      declarations: [ AvailableCurrenciesComponent ],
      imports: [
        RouterModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
        MatPaginatorModule,
        MatGridListModule ],
      providers: [
        CurrencyService
      ]
    })
    .compileComponents();

    TestBed.overrideComponent(
      AvailableCurrenciesComponent,
      {set: {providers: [{provide: CurrencyService, useClass: MockAuthService}]}}
    );

    fixture = TestBed.createComponent(AvailableCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    const app = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });


  it('should fetch data',  inject([CurrencyService], (currencyService: CurrencyService) => {
    const app = fixture.debugElement.componentInstance;

    app.getCurrencies();

    expect(app.currencies.length).toBe(0, 'currencies updated');
    expect(app.nbCurrencies).toBe(50, 'total number of currencies updated');
  }));
});
