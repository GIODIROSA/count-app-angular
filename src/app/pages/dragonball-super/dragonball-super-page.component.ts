import { Component, signal } from '@angular/core';

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super-page',
  imports: [],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {

  name = signal('')
  power = signal(0)
  
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 10000},
    {id: 2, name: 'Vegeta', power: 9000},
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
