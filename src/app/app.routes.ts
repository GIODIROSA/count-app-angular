import { Routes } from '@angular/router';
import { CountPageComponent } from './pages/count/counter.components';
import { HeroPageComponent } from './pages/hero/hero.components';
import { DragonBallPageComponent } from './pages/dragonBall/dragonBall.component';

export const routes: Routes = [
    {
        path: '',
        component: CountPageComponent
    },
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
        path: 'dragonball',
        component: DragonBallPageComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
];

