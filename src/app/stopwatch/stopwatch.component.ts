import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {
  displayTime: string = '00:00:00.0';
  timerStarted: boolean = false;
  isRunning: boolean = false;
  startTime: Date = new Date();
  timerInterval: any;

  ngOnInit(): void {
    this.updateDisplay();
  }

  toggleTimer() {
    if (this.timerStarted) {
      clearInterval(this.timerInterval);
    } else {
      this.startTime = new Date();
      this.timerInterval = setInterval(() => {
        this.updateDisplay();
      }, 100); // Update every 100 milliseconds
    }
    this.isRunning = !this.isRunning;
    this.timerStarted = true;
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.timerStarted = false;
    this.isRunning = false;
    this.displayTime = '00:00:00.0';
  }

  updateDisplay() {
    const currentTime = new Date().getTime() - this.startTime.getTime();
    let hours = Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((currentTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((currentTime % 1000) / 100); // Get tenths of a second

    this.displayTime = `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}.${milliseconds}`;
  }

  padNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
