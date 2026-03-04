import { Routes } from '@angular/router';
import { CountPageComponent } from './count/counter.components';
import { HeroPageComponent } from './pages/hero/hero.components';

export const routes: Routes = [
    {
        path: '',
        component: CountPageComponent
    }, 
    {
         path: 'hero',
        component: HeroPageComponent
  }
];

