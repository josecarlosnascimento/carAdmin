import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesaLancamentoComponent } from './despesa-lancamento/despesa-lancamento.component';
import { DespesaPesquisaComponent } from './despesa-pesquisa/despesa-pesquisa.component';


const routes: Routes = [
  {
    path: '',
    component: DespesaPesquisaComponent,
  },
  {
    path: 'lancamento/:codigo',
    component: DespesaLancamentoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesaLancamentoRoutingModule { }
