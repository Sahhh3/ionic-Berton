import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnoncesListPage } from './annonces-list.page';

describe('AnnoncesListPage', () => {
  let component: AnnoncesListPage;
  let fixture: ComponentFixture<AnnoncesListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnnoncesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
