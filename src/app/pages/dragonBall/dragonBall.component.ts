
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

    name = signal('Gohan');
    power = signal(100);

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 15000, active: true },
        { id: 2, name: 'Vegeta', power: 12000, active: true },
        { id: 3, name: 'Piccolo', power: 8000, active: true },
        { id: 4, name: 'Gohan', power: 800, active: true },
    ]);

    powerClasses = computed(() => {
        return {
            'text-danger': true,
        }
    });

    addCharacter() {
        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: Number(this.power()),
            active: true
        };
        this.characters.update(characters => [...characters, newCharacter]);
    }

}


