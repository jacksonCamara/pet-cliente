import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaCadastroComponent } from './raca-cadastro.component';

describe('RacaCadastroComponent', () => {
  let component: RacaCadastroComponent;
  let fixture: ComponentFixture<RacaCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacaCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
