import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesaPesquisaComponent } from './despesa-pesquisa/despesa-pesquisa.component';
import { DespesaLancamentoComponent } from './despesa-lancamento/despesa-lancamento.component';



@NgModule({
  declarations: [DespesaPesquisaComponent, DespesaLancamentoComponent],
  imports: [
    CommonModule
  ]
})
export class DespesasModule { }
