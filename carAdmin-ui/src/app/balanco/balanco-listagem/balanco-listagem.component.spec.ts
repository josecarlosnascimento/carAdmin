import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancoListagemComponent } from './balanco-listagem.component';

describe('BalancoListagemComponent', () => {
  let component: BalancoListagemComponent;
  let fixture: ComponentFixture<BalancoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
