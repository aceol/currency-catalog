import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyComponent } from './currency.component';
import {ActivatedRoute} from '@angular/router';
import { MatListModule, MatButtonModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import {CurrencyService} from '../services/currency.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Observable} from 'rxjs';
import {Currency, DataCurrency} from '../../assets/Currency';

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;
  // let httpMock: HttpTestingController;
  let currencyServiceSpy: jasmine.SpyObj<CurrencyService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('CurrencyService', ['getCurrency']);

    TestBed.configureTestingModule({
      declarations: [ CurrencyComponent ],
      imports: [
        HttpClientTestingModule,
        MatListModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule ],
      providers: [
        { provide: CurrencyService, useValue: spy },
        { provide: ActivatedRoute,
          useValue: {
            params: {
              subscribe: (fn: (value: Object) => void) => fn({
                curr: 'euros',
              }),
            },
          }
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    currencyServiceSpy = TestBed.get(CurrencyService);

    // A deplacer dans le service
    // httpMock = TestBed.get(HttpTestingController);
  }));

  it('should create', () => {
    const app = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
    expect(app.curr).toEqual('euros');
  });

  it('should fetch data', () => {
    const app = fixture.debugElement.componentInstance;
    const dataCurrency = new DataCurrency();
    dataCurrency.data = new Currency();
    dataCurrency.data.id = 'EUR';
    const retValue = Observable.create(() => dataCurrency); // new Observable<DataCurrency>();
    currencyServiceSpy.getCurrency.and.callFake( arg => {
      console.log('====> currencyServiceSpy.getCurrency.and.callFake', arg);
      return retValue;
    });

    app.getData('EUR');
    expect(app.curr).toBe('EUR', 'currency code  updated');
    expect(app.currency.id).toBe('EUR', 'currency updated');

    expect(currencyServiceSpy.getCurrency.calls.count())
      .toBe(1, 'spy method was called once');
  });
});
