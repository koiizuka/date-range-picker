import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEventDateRangePickerComponent } from './change-event-date-range-picker.component';

describe('ChangeEventDateRangePickerComponent', () => {
  let component: ChangeEventDateRangePickerComponent;
  let fixture: ComponentFixture<ChangeEventDateRangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeEventDateRangePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEventDateRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
