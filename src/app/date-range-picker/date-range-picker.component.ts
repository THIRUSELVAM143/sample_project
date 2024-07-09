import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent {
  dateRangeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dateRangeForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(10)]]
    });
  }

  onFormSubmit() {
    if (this.dateRangeForm.valid) {
      const formData = this.dateRangeForm.value;
      console.log('Form submitted with data:', formData);

      // Optionally reset the form after submission
      this.dateRangeForm.reset();
    } else {
      console.error('Form invalid. Cannot submit.');
    }
  }
}
