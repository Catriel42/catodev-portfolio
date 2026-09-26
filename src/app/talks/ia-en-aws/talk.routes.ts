import { Routes } from '@angular/router';

export const TALK_ROUTES: Routes = [
  { path: '', redirectTo: '0', pathMatch: 'full' },
  {
    path: ':slide',
    loadComponent: () => import('./slide-deck').then(m => m.SlideDeck),
  },
];
