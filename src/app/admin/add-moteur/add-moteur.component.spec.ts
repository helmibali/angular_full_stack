import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoteurComponent } from './add-moteur.component';

describe('AddMoteurComponent', () => {
  let component: AddMoteurComponent;
  let fixture: ComponentFixture<AddMoteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMoteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
