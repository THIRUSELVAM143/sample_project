import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent {
  dateRangeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dateRangeForm = this.fb.group({
      fromDate: [null],
      toDate: [null]
    });
  }
}
