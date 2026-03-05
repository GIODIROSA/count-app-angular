import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter-page/counter-page';
import { Hero } from './pages/hero/hero';

export const routes: Routes = [
    { path: '', component: CounterPage },
    { path: 'hero', component: Hero },
];
