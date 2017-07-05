import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoPesquisaComponent } from './servico-pesquisa.component';

describe('ServicoPesquisaComponent', () => {
  let component: ServicoPesquisaComponent;
  let fixture: ComponentFixture<ServicoPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
