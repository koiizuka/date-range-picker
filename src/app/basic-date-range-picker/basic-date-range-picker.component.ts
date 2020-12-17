import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-date-range-picker',
  templateUrl: './basic-date-range-picker.component.html',
  styleUrls: ['./basic-date-range-picker.component.css']
})
export class BasicDateRangePickerComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
