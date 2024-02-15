import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-annonces-list',
  templateUrl: './annonces-list.page.html',
  styleUrls: ['./annonces-list.page.scss'],
})
export class AnnoncesListPage implements OnInit {
  annonces!: Array<Annonce>;

  constructor(
    private Annonce: AnnonceService
  ) { }

  ngOnInit() {
    this.Annonce.getAll().subscribe((data: any) => {
      this.annonces = data;
    });
  }

}
