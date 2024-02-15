import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnonceNewPageRoutingModule } from './annonce-new-routing.module';

import { AnnonceNewPage } from './annonce-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnonceNewPageRoutingModule
  ],
  declarations: [AnnonceNewPage]
})
export class AnnonceNewPageModule {}
