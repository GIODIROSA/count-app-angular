import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page.component',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  
})
export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);

    heroDescription = computed (() => {
      const description = `${ this.name()} - ${this.age()}`;
      return description;
    });

    changeHero(){
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm(){
        this.name.set('Ironman');
        this.age.set(45);
    }

    chageAge(){
      this.age.set(60);
    }
}
