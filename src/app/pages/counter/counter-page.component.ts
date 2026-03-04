import { Component } from '@angular/core';

@Component({
  template: `
    <h1 class="text-3xl font-bold">Contador: {{ counter }}</h1>
    <button
      (click)="addOne()"
      class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg active:scale-90"
    >
      +1
    </button>
    <button
      (click)="minusOne()"
      class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg active:scale-90"
    >
      -1
    </button>
    <button
      (click)="resetCounter()"
      class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg active:scale-90"
    >
      Reset
    </button>
  `,
})
export class CounterPageComponent {
  counter: number = 10;

  addOne() {
    this.counter += 1;
  }

  resetCounter() {
    this.counter = 0;
  }

  minusOne() {
    this.counter -= 1;
  }
}
