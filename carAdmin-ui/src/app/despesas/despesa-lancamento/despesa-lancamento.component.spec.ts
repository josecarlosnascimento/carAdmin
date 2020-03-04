import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaLancamentoComponent } from './despesa-lancamento.component';

describe('DespesaLancamentoComponent', () => {
  let component: DespesaLancamentoComponent;
  let fixture: ComponentFixture<DespesaLancamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesaLancamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
