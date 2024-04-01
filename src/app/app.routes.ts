import { Route, Routes } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (d) => d.DashboardComponent
      ),
    title: 'Dashboard',
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
] as Routes;
