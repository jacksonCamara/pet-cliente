import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeloCadastroComponent } from './pelo-cadastro.component';

describe('PeloCadastroComponent', () => {
  let component: PeloCadastroComponent;
  let fixture: ComponentFixture<PeloCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeloCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeloCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
