import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDateRangePickerComponent } from './basic-date-range-picker.component';

describe('BasicDateRangePickerComponent', () => {
  let component: BasicDateRangePickerComponent;
  let fixture: ComponentFixture<BasicDateRangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDateRangePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDateRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
