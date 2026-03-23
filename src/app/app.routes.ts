import { Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { CounterComponentPago } from './pages/counter/counter-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [
    {
        path: 'counter',
        component: CounterComponentPago,

    },
    {
        path : '',
        component: HeroPageComponent,
    },
    {
        path: 'dragonball',
        component: DragonballPageComponent,
    },
    {
        path: 'dragonball-super',
        component: DragonballSuperPageComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
    

];

