import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesaPesquisaComponent } from './despesa-pesquisa/despesa-pesquisa.component';
import { DespesaLancamentoComponent } from './despesa-lancamento/despesa-lancamento.component';
import { DespesaLancamentoRoutingModule } from './despesa-lancamento-routing.module';
import { VeiculoPesquisaFiltroComponent } from '../veiculos/veiculo-pesquisa-filtro/veiculo-pesquisa-filtro.component';
import { VeiculosModule } from '../veiculos/veiculos.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DespesaPesquisaComponent, DespesaLancamentoComponent],
  imports: [
    CommonModule,
    DespesaLancamentoRoutingModule,
    VeiculosModule,

    MatCardModule,
    FormsModule,
    ReactiveFormsModule, 

  ]
})
export class DespesasModule { }
