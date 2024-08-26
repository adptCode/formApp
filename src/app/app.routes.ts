import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/routes/reactive.routes').then(r => r.reactiveRoutes)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/routes/auth.routes').then(r => r.authRoutes)
  },
  {
    path: '**',
    redirectTo: 'reactive'
  }
];
