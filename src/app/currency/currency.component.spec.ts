import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyComponent } from './currency.component';
import {ActivatedRoute} from '@angular/router';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyComponent ],
      imports: [ MatToolbarModule, MatMenuModule, MatButtonModule],
      providers: [
        { provide: ActivatedRoute,
          useValue: {
            params: {
              subscribe: (fn: (value: Object) => void) => fn({
                curr: 'euros',
              }),
            },
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const app = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
    expect(app.curr).toEqual('euros');
  });
});
