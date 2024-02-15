import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnonceNewPage } from './annonce-new.page';

const routes: Routes = [
  {
    path: '',
    component: AnnonceNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnonceNewPageRoutingModule {}
