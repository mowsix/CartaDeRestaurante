import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/home/home.component').then((r) => r.HomeComponent),
  },
  {
    path: 'producto',
    loadComponent: () =>
      import('./views/product/product.component').then(
        (r) => r.ProductComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
