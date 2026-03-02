import { Component } from '@angular/core';


//decorador
@Component({
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})


export class CountPageComponent {

  counter = 10;

  incrementby(value: number) {
    this.counter = Math.max(0, this.counter + value);
  }

  reset() {
    this.counter = 0
  }


}
