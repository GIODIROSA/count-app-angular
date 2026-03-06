import { Component, signal } from '@angular/core';


//decorador
@Component({
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})


export class CountPageComponent {

  counter = 10;
  counterSignal = signal(10);

  incrementby(value: number) {
    this.counter = Math.max(0, this.counter + value);
    this.counterSignal.update(current => Math.max(0, current + value));
  }


  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }


}
