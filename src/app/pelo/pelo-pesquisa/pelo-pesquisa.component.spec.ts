import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeloPesquisaComponent } from './pelo-pesquisa.component';

describe('PeloPesquisaComponent', () => {
  let component: PeloPesquisaComponent;
  let fixture: ComponentFixture<PeloPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeloPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeloPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
