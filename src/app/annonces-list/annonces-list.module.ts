import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnoncesListPageRoutingModule } from './annonces-list-routing.module';

import { AnnoncesListPage } from './annonces-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnoncesListPageRoutingModule
  ],
  declarations: [AnnoncesListPage]
})
export class AnnoncesListPageModule {}
