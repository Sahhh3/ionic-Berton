import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Annonce } from './models/annonce.model';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private dbPath = '/annonces';
  annoncesRef: AngularFirestoreCollection<Annonce>;


  constructor(
    private db: AngularFirestore
  ) { 
    this.annoncesRef = db.collection(this.dbPath);
  }

  getAll() : any {
    return this.annoncesRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewAnnonce(annonce: Annonce) : any {
    return new Observable(obs => {
      this.annoncesRef.add({...annonce}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any):any {
    return  new Observable(obs => {
      this.annoncesRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(annonce:Annonce) {
    return new Observable(obs => {
      this.annoncesRef.doc(annonce.id).update(annonce);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`annonces/${id}`).delete();
  }
}
