import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStrategyDateRangePickerComponent } from './custom-strategy-date-range-picker.component';
import { DateAdapter } from '@angular/material/core';

describe('CustomStrategyDateRangePickerComponent', () => {
  let component: CustomStrategyDateRangePickerComponent;
  let fixture: ComponentFixture<CustomStrategyDateRangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomStrategyDateRangePickerComponent ],
      providers: [ DateAdapter ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStrategyDateRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
