import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-event-date-range-picker',
  templateUrl: './change-event-date-range-picker.component.html',
  styleUrls: ['./change-event-date-range-picker.component.css']
})
export class ChangeEventDateRangePickerComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  events: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDateChange() {
    const start = this.range.get('start')?.value as Date;
    const end = this.range.get('end')?.value as Date;

    if (start && end) {
      this.events.push(`[start, end]: ${start?.toLocaleDateString()}, ${end?.toLocaleDateString()}`);
    }
  }
}
