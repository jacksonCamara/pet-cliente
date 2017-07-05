import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetPesquisaComponent } from './pet-pesquisa.component';

describe('PetPesquisaComponent', () => {
  let component: PetPesquisaComponent;
  let fixture: ComponentFixture<PetPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
