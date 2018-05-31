import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCurrenciesComponent } from './available-currencies.component';
import {MatPaginatorModule, MatGridListModule } from '@angular/material';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Routes, RouterModule } from '@angular/router';

describe('AvailableCurrenciesComponent', () => {
  let component: AvailableCurrenciesComponent;
  let fixture: ComponentFixture<AvailableCurrenciesComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async (() => {

    TestBed.configureTestingModule({
      declarations: [ AvailableCurrenciesComponent ],
      imports: [ NoopAnimationsModule, RouterModule, HttpClientTestingModule, MatPaginatorModule, MatGridListModule ],
    })
    .compileComponents();

    httpMock = TestBed.get(HttpTestingController);
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
