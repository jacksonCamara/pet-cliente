import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacotePesquisaComponent } from './pacote-pesquisa.component';

describe('PacotePesquisaComponent', () => {
  let component: PacotePesquisaComponent;
  let fixture: ComponentFixture<PacotePesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacotePesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacotePesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
