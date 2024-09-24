import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'persons'},
  {
    path: 'persons',
    loadChildren: () => import('./escola.module').then(m => m.EscolaModule)
  }
];
