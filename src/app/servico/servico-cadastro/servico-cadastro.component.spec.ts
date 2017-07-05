import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoCadastroComponent } from './servico-cadastro.component';

describe('ServicoCadastroComponent', () => {
  let component: ServicoCadastroComponent;
  let fixture: ComponentFixture<ServicoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
