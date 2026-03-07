import { Routes } from '@angular/router';
//import { CounterComponentPago } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
    //{
        //path: '',
        //component: CounterComponentPago,

    //},
    {
        path : 'hero',
        component: HeroPageComponent,
    }
];

