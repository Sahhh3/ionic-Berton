import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnoncesListPage } from './annonces-list.page';

const routes: Routes = [
  {
    path: '',
    component: AnnoncesListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./annonce-new/annonce-new.module').then( m => m.AnnonceNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./annonce/annonce.module').then( m => m.AnnoncePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnoncesListPageRoutingModule {}
