
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

    changeHero(): void {
        this.name.update((name) => 'Spiderman');
    }

    changeAge(): void {
        this.age.update((age) => age + 1);
    }

    resetForm(): void {
        this.name.set('Ironman');
        this.age.set(25);
    }
}