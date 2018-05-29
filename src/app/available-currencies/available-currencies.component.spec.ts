import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCurrenciesComponent } from './available-currencies.component';

describe('AvailableCurrenciesComponent', () => {
  let component: AvailableCurrenciesComponent;
  let fixture: ComponentFixture<AvailableCurrenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCurrenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
