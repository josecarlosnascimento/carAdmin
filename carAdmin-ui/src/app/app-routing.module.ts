import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias/categorias.component';
import { VeiculosPesquisaComponent } from './veiculos/veiculos-pesquisa/veiculos-pesquisa.component';
import { ClientesPesquisaComponent } from './clientes/clientes-pesquisa/clientes-pesquisa.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LocacaoPesquisaComponent } from './locacao/locacao-pesquisa/locacao-pesquisa.component';
import { DespesaPesquisaComponent } from './despesas/despesa-pesquisa/despesa-pesquisa.component';
import { BalancoListagemComponent } from './balanco/balanco-listagem/balanco-listagem.component';
import { ClientesCadastroComponent } from './clientes/clientes-cadastro/clientes-cadastro.component';
import { VeiculosCadastroComponent } from './veiculos/veiculos-cadastro/veiculos-cadastro.component';
import { DespesaLancamentoComponent } from './despesas/despesa-lancamento/despesa-lancamento.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'veiculos', component: VeiculosPesquisaComponent},
  {path: 'clientes', component: ClientesPesquisaComponent},
  {path: 'locacao', component: LocacaoPesquisaComponent},
  {path: 'despesas', component: DespesaPesquisaComponent},
  {path: 'balanco', component: BalancoListagemComponent},

  {path: 'clientes/novo', component: ClientesCadastroComponent},
  {path: 'veiculos/novo', component: VeiculosCadastroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
