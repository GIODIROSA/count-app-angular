
import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


@Component({
    templateUrl: './hero.html',
    styleUrls: ['./hero.css'],
    imports: [UpperCasePipe]
})



export class HeroPageComponent {

    name = signal('Ironman');
    age = signal(25);

    heroDescription = computed(() => {
        const description = `${this.name()} - ${this.age()}`;
        return description;
    });

    capitalizedName = computed(() => {
        return this.name().toUpperCase();
    });

    getHeroDescription() {
        this.heroDescription
    }

    changeHero(): void {
        this.name.set('Spiderman');
    }

    changeAge(): void {
        this.age.set(60);
    }

    resetForm(): void {
        this.name.set('Ironman');
        this.age.set(25);
    }
}