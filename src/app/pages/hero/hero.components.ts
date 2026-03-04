
import { Component, computed, signal } from '@angular/core';


@Component({
    templateUrl: './hero.html',
    styleUrls: ['./hero.css']
})



export class HeroPageComponent {

    name = signal('Ironman');
    age = signal(25);


    getHeroDescription = computed(() => {
        return `${this.name()} - ${this.age()}`;
    });

    changeHero() {
        this.name.update((name) => 'Spiderman');
    }

    changeAge() {
        this.age.update((age) => age + 1);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(25);
    }
}