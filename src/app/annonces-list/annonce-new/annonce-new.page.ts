import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AnnonceService } from 'src/app/annonce.service';
import { Annonce } from 'src/app/models/annonce.model';

@Component({
  selector: 'app-annonce-new',
  templateUrl: './annonce-new.page.html',
  styleUrls: ['./annonce-new.page.scss'],
})
export class AnnonceNewPage implements OnInit {
  public annonce!: Annonce;

  constructor(
    private Annonce: AnnonceService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.annonce = new Annonce();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Annonce enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/annonces']);
      }, 2000);
    });
  }

  add() {
    this.Annonce.saveNewAnnonce(this.annonce).subscribe(() => {
      this.annonce = new Annonce();
      this.presentToast();
    });
  }
}
