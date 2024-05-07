import { Routes } from '@angular/router';

export enum RouterPath {
  draws = 'draws',
}

export const routes: Routes = [
  {
    path: RouterPath.draws,
    loadComponent: () => import('./list/list.component').then((m) => m.ListComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
