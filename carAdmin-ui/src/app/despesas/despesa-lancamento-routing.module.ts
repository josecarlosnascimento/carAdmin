import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesaLancamentoComponent } from './despesa-lancamento/despesa-lancamento.component';


const routes: Routes = [
  {
    path: 'despesas/lancamento/:codigo',
    component: DespesaLancamentoComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesaLancamentoRoutingModule { }
