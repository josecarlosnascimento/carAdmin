import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaPesquisaComponent } from './despesa-pesquisa.component';

describe('DespesaPesquisaComponent', () => {
  let component: DespesaPesquisaComponent;
  let fixture: ComponentFixture<DespesaPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesaPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
