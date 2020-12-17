import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatNativeDateModule } from '@angular/material/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BasicDateRangePickerComponent } from './basic-date-range-picker/basic-date-range-picker.component';
import { CustomStrategyDateRangePickerComponent } from './custom-strategy-date-range-picker/custom-strategy-date-range-picker.component';
@NgModule({
  declarations: [
    AppComponent,
    BasicDateRangePickerComponent,
    CustomStrategyDateRangePickerComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
