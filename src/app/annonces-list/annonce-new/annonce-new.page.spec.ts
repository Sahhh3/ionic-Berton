import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnonceNewPage } from './annonce-new.page';

describe('AnnonceNewPage', () => {
  let component: AnnonceNewPage;
  let fixture: ComponentFixture<AnnonceNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnnonceNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
