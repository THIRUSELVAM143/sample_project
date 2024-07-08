// calculator.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator_component.html',
  styleUrls: ['./calculator_component.css']
})
export class CalculatorComponent {
  display: string = ''; // Holds the display value

  addToDisplay(value: string) {
    this.display += value;
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (e) {
      this.display = 'Error';
    }
  }

  clear() {
    this.display = '';
  }
}
