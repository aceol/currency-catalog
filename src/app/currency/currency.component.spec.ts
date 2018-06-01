import {async, ComponentFixture, getTestBed, inject, TestBed} from '@angular/core/testing';
import { CurrencyComponent } from './currency.component';
import {ActivatedRoute} from '@angular/router';
import { MatListModule, MatButtonModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import {CurrencyService} from '../services/currency.service';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpClient
} from '@angular/common/http';
import {Currency, DataCurrency} from '../../assets/Currency';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {Observable} from "rxjs/internal/Observable";

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;

  class MockAuthService extends CurrencyService {
    getCurrency(curr): Observable<DataCurrency> {
      const dataCurrency = new DataCurrency();
      dataCurrency.data = new Currency();
      dataCurrency.data.id = 'EURO';
      return Observable.create(function(observer) {
        observer.next(dataCurrency);
      });
    }
  }

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ CurrencyComponent ],
      imports: [
        HttpClientTestingModule,
        MatListModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule ],
      providers: [
        { provide: ActivatedRoute,
          useValue: {
            params: {
              subscribe: (fn: (value: Object) => void) => fn({
                curr: 'euros',
              }),
            },
          }
        },
        CurrencyService
      ]
    })
    .compileComponents();

    TestBed.overrideComponent(
      CurrencyComponent,
      {set: {providers: [{provide: CurrencyService, useClass: MockAuthService}]}}
    );


    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', inject([CurrencyService], (currencyService: CurrencyService) => {
    const app = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
    expect(app.curr).toEqual('euros');
  }));

  it('should fetch data',  inject([CurrencyService], (currencyService: CurrencyService) => {
    const app = fixture.debugElement.componentInstance;

    app.getData('EUR');

    expect(app.curr).toBe('EUR', 'currency code  updated');
    expect(app.currency.id).toBe('EURO', 'currency updated');
  }));

});
