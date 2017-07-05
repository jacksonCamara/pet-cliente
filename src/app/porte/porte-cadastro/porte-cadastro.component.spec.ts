import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanhoCadastroComponent } from './tamanho-cadastro.component';

describe('TamanhoCadastroComponent', () => {
  let component: TamanhoCadastroComponent;
  let fixture: ComponentFixture<TamanhoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamanhoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamanhoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
