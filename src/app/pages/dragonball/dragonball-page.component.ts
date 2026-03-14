import { Component, signal } from '@angular/core';

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page.component',
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  name = signal('Gohan')
  power = signal(0)
  
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 10000},
    {id: 2, name: 'Vegeta', power: 9000},
    {id: 3, name: 'Piccolo', power: 8000},
    {id: 4, name: 'Gohan', power: 7000},
  ]);

  addCharacter(){
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    this.characters.update(currentCharacters => [...currentCharacters, newCharacter]);
    this.name.set('');
    this.power.set(0);
  }

}
