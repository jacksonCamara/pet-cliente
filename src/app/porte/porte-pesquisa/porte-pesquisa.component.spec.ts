import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanhoPesquisaComponent } from './tamanho-pesquisa.component';

describe('TamanhoPesquisaComponent', () => {
  let component: TamanhoPesquisaComponent;
  let fixture: ComponentFixture<TamanhoPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamanhoPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamanhoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
