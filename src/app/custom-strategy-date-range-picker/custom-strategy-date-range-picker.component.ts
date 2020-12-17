import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { DateRange, MatDateRangeSelectionStrategy, MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { Subject } from 'rxjs';

@Injectable()
export class MyMatCalendarRangeStrategy<D> implements MatDateRangeSelectionStrategy<D> {

  readonly isComplete = new Subject<{start: D, end: D}>();

  constructor(private _dateAdapter: DateAdapter<D>) {}

  selectionFinished(date: D, currentRange: DateRange<D>) {
    let {start, end} = currentRange;

    if (start == null) {
      start = date;
    } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
      end = date;
    } else {
      start = date;
      end = null;
    }

    if (end != null && start != null && this._dateAdapter.compareDate(date, start) >= 0) {
      this.isComplete.next({start: start, end: end});
    }

    return new DateRange<D>(start, end);
  }

  createPreview(activeDate: D | null, currentRange: DateRange<D>) {
    let start: D | null = null;
    let end: D | null = null;

    if (currentRange.start && !currentRange.end && activeDate) {
      start = currentRange.start;
      end = activeDate;
    }

    return new DateRange<D>(start, end);
  }
}

@Component({
  selector: 'app-custom-strategy-date-range-picker',
  templateUrl: './custom-strategy-date-range-picker.component.html',
  styleUrls: ['./custom-strategy-date-range-picker.component.css'],
  providers: [{
    provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
    useClass: MyMatCalendarRangeStrategy
  }]
})
export class CustomStrategyDateRangePickerComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  events: string[] = [];

  constructor(
    @Inject(MAT_DATE_RANGE_SELECTION_STRATEGY) private strategy: MyMatCalendarRangeStrategy<Date>
  ) { }

  ngOnInit(): void {
    this.strategy.isComplete.subscribe(({start, end}) => {
      this.events.push(`[start, end]: ${start?.toLocaleDateString()}, ${end?.toLocaleDateString()}`);
    })
  }

}
