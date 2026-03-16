
import { Component, computed, signal } from '@angular/core';

interface Character {
    id: number;
    name: string;
    power: number;
    active: boolean;
}

@Component({
    templateUrl: './dragonball.html',
    imports: []
})
export class DragonBallPageComponent {

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 15000, active: true },
        { id: 2, name: 'Vegeta', power: 12000, active: true },
        { id: 3, name: 'Piccolo', power: 8000, active: true },
    ]);

    powerClasses = computed(() => {
        return {
            'text-danger': true,
        }
    });

}


