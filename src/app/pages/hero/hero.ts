import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription(): string {
    return `${this.name()} tiene ${this.age()} años`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }
}
