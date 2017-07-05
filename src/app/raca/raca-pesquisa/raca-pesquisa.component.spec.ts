import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaPesquisaComponent } from './raca-pesquisa.component';

describe('RacaPesquisaComponent', () => {
  let component: RacaPesquisaComponent;
  let fixture: ComponentFixture<RacaPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacaPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
