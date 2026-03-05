import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css',
})
export class CounterPage {
  counter: number = 0;

  increaseBy(value: number) {
    this.counter += value;
  }
  resetCounter() {
    this.counter = 0;
  }
}
