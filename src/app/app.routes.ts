import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component'),
    children: [
      {
        path: 'product',
        title: 'producto',
        loadComponent: () => import('./pages/producto/producto.component'),
      },
      {
        path: 'lote',
        title: 'Lote',
        loadComponent: () => import('./pages/lote/lote.component'),
      },
      {
        path: 'actividad--marca-categoria',
        title: 'Actividad Marca y Categoria',
        loadComponent: () => import('./pages/actividad/actividad.component'),
      },
      {
        path: 'product',
        title: 'producto',
        loadComponent: () => import('./pages/producto/producto.component'),
      },
     
      {
path:'',
redirectTo:'actividad--marca-categoria',
pathMatch:'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
